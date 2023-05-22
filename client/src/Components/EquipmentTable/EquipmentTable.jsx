import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import React, { useEffect, useState } from "react";
import TableHead from "../EmployeeTable/EmployeeTableHead";
import TableBody from "../EmployeeTable/EmployeeTableBody";

export const EquipmentTable = ({ equipments, onDelete }) => {
  const [tableData, setTableData] = useState(equipments);
  // const [lvlSearchInnerValue, setLvlSearchInnerValue] = useState("");
  // const [positionSearchInnerValue, setPositionSearchInnerValue] = useState("");

  useEffect(() => {
    setTableData(equipments);
  }, [equipments.length]);

  const columns = [
    { label: "Name", accessor: "name", sortable: true },
    { label: "Type", accessor: "type", sortable: true },
    { label: "Amount", accessor: "amount", sortable: true },
    { label: "", accessor: "actions", sortable: false },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
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
  const path = "/equipments";
  return (
    <>
      <div className="table_title">
        <h1>Equipments Database</h1>
        {/* <EmployeePositionFilter //!
        // {...{ searchInnerValue, setSearchInnerValue }} //!
        /> */}
        <div>
          <Link to="/equipments/create">
            <Button variant="contained" color="secondary">
              Add Equipment
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
