import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import React, { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { SketchPicker } from "react-color";

const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
  const [value, setValue] = useState(() => {
    return employee ? employee.startingDate : null;
  });
  const [blockPickerColor, setBlockPickerColor] = useState(() => {
    return employee ? employee.favColor : "#fff";
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const employee = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(employee);
  };

  return (
    <Box
      sx={{
        margin: "2rem",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
      component="form"
      onSubmit={onSubmit}
    >
      {employee && (
        <input type="hidden" name="_id" defaultValue={employee._id} />
      )}

      <FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Starting Date"
            value={value}
            inputFormat="YYYY-MM-DD"
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={params?.inputProps?.placeholder}
                name="startingDate"
                id="startingDate"
              />
            )}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={employee ? employee.firstName : null}
          name="firstName"
          id="firstName"
          label="First Name"
          variant="outlined"
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={employee ? employee.middleName : null}
          name="middleName"
          id="middleName"
          label="Middle Name"
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={employee ? employee.lastName : null}
          name="lastName"
          id="lastName"
          label="Last Name"
          variant="outlined"
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={employee ? employee.currentSalary : null}
          name="currentSalary"
          id="currentSalary"
          label="Current Salary"
          type="number"
          variant="outlined"
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={employee ? employee.desiredSalary : null}
          name="desiredSalary"
          id="desiredSalary"
          label="Desired Salary"
          type="number"
          variant="outlined"
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={employee ? employee.level : null}
          name="level"
          id="level"
          label="Level"
          variant="outlined"
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={employee ? employee.position : null}
          name="position"
          id="position"
          label="Position"
          variant="outlined"
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          sx={{
            marginBottom: "0.5rem",
          }}
          defaultValue={employee ? employee.favColor : null}
          value={blockPickerColor}
          label="Favorite Color"
          name="favColor"
          id="favColor"
          variant="outlined"
        />
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {blockPickerColor ? (
            <div
              style={{
                backgroundColor: `${blockPickerColor}`,
                width: "100%",
                borderRadius: "5px",
                border: "1px solid black",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {`Color Sample: ${blockPickerColor}`}
            </div>
          ) : (
            ""
          )}
          <SketchPicker
            onChange={(color) => {
              setBlockPickerColor(color.hex);
            }}
            color={blockPickerColor}
          />
        </Box>
      </FormControl>

      <div>
        <Button
          sx={{ marginRight: "1rem" }}
          variant="contained"
          type="submit"
          disabled={disabled}
        >
          {employee ? "Update Employee" : "Create Employee"}
        </Button>

        <Button variant="contained" color="warning" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Box>
  );
};

export default EmployeeForm;
