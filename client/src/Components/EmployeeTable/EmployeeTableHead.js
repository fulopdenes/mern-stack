import { useState } from "react";

const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return (
    <thead key="1">
      <tr>
        {columns.map(({ label, accessor, sortable }, i) => {
          const isSortable = sortable
            ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              key={i}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
              className={isSortable}
            >
              {label ? label : null}
            </th>
          );
        })}
      </tr>
      <tr>
        {columns.map(({ accessor, filter }) => {
          return <th key={accessor}>{filter ? filter : ""}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
