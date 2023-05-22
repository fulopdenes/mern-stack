import React from "react";
import { Button } from "@mui/material";

export const Confirm = ({ message, onDialog }) => {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
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
            Yes
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
            No
          </Button>
        </div>
      </div>
    </div>
  );
};
