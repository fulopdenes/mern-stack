import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../../Components/Forms/EmployeeForm";

const createEmployee = (employee) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => res.json());
};

const EmployeeCreator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreateEmployee = (employee) => {
    setLoading(true);

    createEmployee(employee)
      .then(() => {
        navigate("/employees");
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <EmployeeForm
      onCancel={() => navigate("/employees")}
      disabled={loading}
      onSave={handleCreateEmployee}
    />
  );
};

export default EmployeeCreator;
