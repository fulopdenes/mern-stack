import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "../../index.css";
import { MiniEqfilter } from "../../Components/EmployeeTable/miniEqfilter";

export const AddEquipment = ({ miniTableData, message, onDialog }) => {

  const [eqNameSearchInnerValue, setEqNameSearchInnerValue] = useState("");
  const [miniTableDataState, setMiniTableDataState] = useState(miniTableData);
  const [EqAmount, setEqAmount] = useState(
    miniTableData.map((equipment) => equipment.amount)
  );

  const eQnameFilterValues = (eqNameSearchInnerValue) => {
    if (eqNameSearchInnerValue === "") {
      return miniTableData;
    }
    return miniTableData.filter((equipment) =>
      equipment.name
        .toLowerCase()
        .includes(eqNameSearchInnerValue.toLowerCase())
    );
  };

  const onClickPlus = (element) => {
    console.log(element.target.value);
    let trElement = element.target.parentNode.parentNode;
    let rowIndex = trElement.rowIndex - 2;
    setEqAmount((existingItems) => {
      return [
        ...existingItems.slice(0, rowIndex),
        existingItems[rowIndex] - 1,
        ...existingItems.slice(rowIndex + 1),
      ];
    });
  };

  useEffect(() => {
    const filteredEqNameList = eQnameFilterValues(eqNameSearchInnerValue);
    setMiniTableDataState(filteredEqNameList);
  }, [eqNameSearchInnerValue]);

  const namefilterInputTool = (
    <div className="headerlvlFilter">
      {
        <MiniEqfilter
          {...{
            eqNameSearchInnerValue,
            setEqNameSearchInnerValue,
          }}
        />
      }
    </div>
  );

  const miniColumns = [
    {
      label: "Name",
      accessor: "name",
      sortable: true,
      filter: namefilterInputTool,
    },
    { label: "Amount", accessor: "amount", sortable: true },
    { label: "", accessor: "actions", sortable: false },
  ];
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ color: "#111", textAlign: "center" }}>{message}</h3>
        <div className="minitable_container">
          Free:
          <table className="table">
            <thead>
              <tr>
                {miniColumns.map(({ accessor, filter }) => {
                  return <th key={accessor}>{filter ? filter : ""}</th>;
                })}
              </tr>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {miniTableDataState ? (
                miniTableDataState.map((data, i) => {
                  return (
                    <tr key={data._id}>
                      <td>{data.name}</td>
                      <td>{EqAmount[i]}</td>
                      <td>
                        <button onClick={onClickPlus} value={data._id}>
                          +
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="tbodyCentered">No Results</tr>
              )}
            </tbody>
          </table>
        </div>
        <div>
          <div className="minitable_container">
            Currently Selected:
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mirror</td>
                  <td>2</td>
                  <td>
                    <button>-</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Button
            onClick={() => onDialog(true)}
            variant="outlined"
            color="warning"
            style={{
              marginRight: "4px",
              background: "rgb(255 0 0 / 56%)",
              color: "white",
              border: "none",
            }}
          >
            Confirm
          </Button>
          <Button
            onClick={() => onDialog(false)}
            variant="outlined"
            color="success"
            style={{
              border: "none",
              marginLeft: "4px",
              background: "rgb(1 139 31)",
              color: "white",
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
