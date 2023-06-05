import React, { useState, useEffect } from "react";
import { EquipmentTable } from "../../Components/EquipmentTable/EquipmentTable";
import Loading from "../../Components/Loading";

const fetchEquipments = (signal) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/equipments`, { signal }).then((res) => res.json());
};

const deleteEquipment = (id) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/equipments/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

export const EquipmentsList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const handleDelete = (id) => {
    deleteEquipment(id).catch(() => {});

    setData((equipments) => {
      return equipments.filter((equipment) => equipment._id !== id);
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchEquipments(controller.signal)
      .then((equipments) => {
        setLoading(false);
        setData(equipments);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setData(null);
          throw error;
        }
      });

    return () => controller.abort();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <EquipmentTable equipments={data} onDelete={handleDelete} />;
};
