import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentForm from "../../Components/Forms/EquipmentForm";

const createEquipment = (equipment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/equipments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipment),
  }).then((res) => res.json());
};

const EquipmentCreator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreateEmployee = (equipment) => {
    setLoading(true);

    createEquipment(equipment)
      .then(() => {
        navigate("/equipments");
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <EquipmentForm
      onCancel={() => navigate("/equipments")}
      disabled={loading}
      onSave={handleCreateEmployee}
    />
  );
};

export default EquipmentCreator;
