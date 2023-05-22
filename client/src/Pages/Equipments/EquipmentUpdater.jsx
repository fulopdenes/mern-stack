import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EquipmentForm from "../../Components/Forms/EquipmentForm";
import Loading from "../../Components/Loading";

const updateEquipment = (equipment) => {
  return fetch(`/api/equipments/${equipment._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipment),
  }).then((res) => res.json());
};

const fetchEquipment = (id) => {
  return fetch(`/api/equipments/${id}`).then((res) => res.json());
};

const EquipmentUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [equipment, setEquipment] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [equipmentLoading, setEquipmentLoading] = useState(true);

  useEffect(() => {
    setEquipmentLoading(true);
    fetchEquipment(id)
      .then((equipment) => {
        setEquipment(equipment);
        setEquipmentLoading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, [id]);

  const handleUpdateEquipment = (equipment) => {
    setUpdateLoading(true);
    updateEquipment(equipment)
      .then(() => {
        navigate("/equipments");
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        setUpdateLoading(false);
      });
  };

  if (equipmentLoading) {
    return <Loading />;
  }

  return (
    <EquipmentForm
      equipment={equipment}
      onSave={handleUpdateEquipment}
      disabled={updateLoading}
      onCancel={() => navigate("/equipments")}
    />
  );
};

export default EquipmentUpdater;
