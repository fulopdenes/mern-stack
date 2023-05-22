import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import React, { useEffect, useState } from "react";
import TableBody from "./EmployeeTableBody";
import TableHead from "./EmployeeTableHead";

import { EmployeeLevelFilter } from "./EmployeeLevelFilter";
import { EmployeePositionFilter } from "./EmployeePositionFilter";

const EmployeeTable = ({ employees, onDelete }) => {
  const [tableData, setTableData] = useState(employees);
  const [lvlSearchInnerValue, setLvlSearchInnerValue] = useState("");
  const [positionSearchInnerValue, setPositionSearchInnerValue] = useState("");

  const lvlFilterValues = (lvlSearchInnerValue, positionSearchInnerValue) => {
    if (lvlSearchInnerValue === "") {
      if (positionSearchInnerValue.length > 0) {
        return employees.filter((employee) =>
          employee.position
            .toLowerCase()
            .includes(positionSearchInnerValue.toLowerCase())
        );
      }
      return employees;
    }
    if (positionSearchInnerValue.length > 0 && lvlSearchInnerValue.length > 0) {
      return employees.filter(
        (employee) =>
          employee.level
            .toLowerCase()
            .includes(lvlSearchInnerValue.toLowerCase()) &&
          employee.position
            .toLowerCase()
            .includes(positionSearchInnerValue.toLowerCase())
      );
    }

    return employees.filter((employee) =>
      employee.level.toLowerCase().includes(lvlSearchInnerValue.toLowerCase())
    );
  };

  const positionFilterValues = (
    positionSearchInnerValue,
    lvlSearchInnerValue
  ) => {
    if (positionSearchInnerValue === "") {
      if (lvlSearchInnerValue.length > 0) {
        return employees.filter((employee) =>
          employee.level
            .toLowerCase()
            .includes(lvlSearchInnerValue.toLowerCase())
        );
      }
      return employees;
    }
    if (positionSearchInnerValue.length > 0 && lvlSearchInnerValue.length > 0) {
      return employees.filter(
        (employee) =>
          employee.level
            .toLowerCase()
            .includes(lvlSearchInnerValue.toLowerCase()) &&
          employee.position
            .toLowerCase()
            .includes(positionSearchInnerValue.toLowerCase())
      );
    }

    return employees.filter((employee) =>
      employee.position
        .toLowerCase()
        .includes(positionSearchInnerValue.toLowerCase())
    );
  };

  useEffect(() => {
    const filteredLvlList = lvlFilterValues(
      lvlSearchInnerValue,
      positionSearchInnerValue
    );
    setTableData(filteredLvlList);
  }, [lvlSearchInnerValue]);

  useEffect(() => {
    const filteredPositionList = positionFilterValues(
      positionSearchInnerValue,
      lvlSearchInnerValue
    );
    setTableData(filteredPositionList);
  }, [positionSearchInnerValue]);

  const lvlfilterInput = (
    <div className="headerlvlFilter">
      {
        <EmployeeLevelFilter
          {...{
            lvlSearchInnerValue,
            setLvlSearchInnerValue,
          }}
        />
      }
    </div>
  );

  const positionfilterInput = (
    <div className="headerpositionFilter">
      {
        <EmployeePositionFilter
          {...{
            positionSearchInnerValue,
            setPositionSearchInnerValue,
          }}
        />
      }
    </div>
  );

  useEffect(() => {
    setTableData(employees);
  }, [employees.length, employees]);

  const columns = [
    { label: "Start Date", accessor: "startingDate", sortable: true },
    { label: "First Name", accessor: "firstName", sortable: true },
    { label: "Middle Name", accessor: "middleName", sortable: true },
    { label: "Last Name", accessor: "lastName", sortable: true },
    { label: "Current Salary", accessor: "currentSalary", sortable: true },
    { label: "Desired Salary", accessor: "desiredSalary", sortable: true },
    { label: "Salary Difference", accessor: "salaryDif", sortable: true },
    {
      label: "Level",
      accessor: "level",
      sortable: true,
      filter: lvlfilterInput,
    },
    {
      label: "Position",
      accessor: "position",
      sortable: true,
      filter: positionfilterInput,
    },
    { label: "Equipments", accessor: "equipments", sortable: true },
    { label: "Favorite Color", accessor: "favColor", sortable: true },
    { label: "", accessor: "actions", sortable: false },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField === "salaryDif") {
      const sorted = [...tableData].sort((a, b) => {
        let newA = a["currentSalary"] - a["desiredSalary"];
        let newB = b["currentSalary"] - b["desiredSalary"];
        if (sortOrder === "desc") {
          if (newA > newB) return -1;
          if (newA < newB) return 1;
        } else {
          if (newA > newB) return 1;
          if (newA < newB) return -1;
        }
        return 0;
      });
      setTableData(sorted);
    }

    if (sortField !== "salaryDif") {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  const path = "/employees";
  return (
    <>
      <div className="table_title">
        <h1>Employees Database</h1>
        <div>
          <Link to="/employees/create">
            <Button variant="contained" color="secondary">
              Add Employee
            </Button>
          </Link>
        </div>
      </div>

      <table className="table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData, onDelete, path }} />
      </table>
    </>
  );
};

export default EmployeeTable;
