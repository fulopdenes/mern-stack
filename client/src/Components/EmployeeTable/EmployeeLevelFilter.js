import TextField from "@mui/material/TextField";

export const EmployeeLevelFilter = ({
  lvlSearchInnerValue,
  setLvlSearchInnerValue,
}) => {
  return (
    <div>
      <TextField
        size="small"
        name="levelFilter"
        id="levelFilter"
        label="filter"
        variant="outlined"
        value={lvlSearchInnerValue}
        onChange={(e) => setLvlSearchInnerValue(e.target.value)}
      />
    </div>
  );
};
