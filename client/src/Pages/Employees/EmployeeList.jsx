import React, { useEffect, useRef, useState } from "react";
import Loading from "../../Components/Loading";
import EmployeeTable from "../../Components/EmployeeTable/EmployeeTable";

const fetchEmployees = (signal) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/employees`, { signal }).then((res) => res.json());
};

const fetchEquipments = (signal) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/equipments`, { signal }).then((res) => res.json());
};

const deleteEmployee = (id) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [miniTableData, setMiniTableData] = useState("");

  const deletedItemRefID = useRef();
  const handleDelete = (id) => {
    deletedItemRefID.current = id;
        deleteEmployee(deletedItemRefID.current).catch(() => {});
        setData((employees) => {
          return employees.filter(
            (employee) => employee._id !== deletedItemRefID.current
          );
        });
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchEmployees(controller.signal)
      .then((employees) => {
        setLoading(false);
        setData(employees);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setData(null);
          throw error;
        }
      });

    fetchEquipments(controller.signal)
      .then((equipments) => {
        setMiniTableData(equipments);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setMiniTableData(null);
          throw error;
        }
      });

    return () => controller.abort();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <EmployeeTable employees={data} onDelete={handleDelete} />
    </>
  );
};

export default EmployeeList;
