import TextField from "@mui/material/TextField";

export const EmployeePositionFilter = ({
  positionSearchInnerValue,
  setPositionSearchInnerValue,
}) => {
  return (
    <div>
      <TextField
        size="small"
        name="levelFilter"
        id="levelFilter"
        label="filter"
        variant="outlined"
        value={positionSearchInnerValue}
        onChange={(e) => setPositionSearchInnerValue(e.target.value)}
      />
    </div>
  );
};
