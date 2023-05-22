import TextField from "@mui/material/TextField";

export const MiniEqfilter = ({
  eqNameSearchInnerValue,
  setEqNameSearchInnerValue,
}) => {
  return (
    <div>
      <TextField
        size="small"
        name="miniEqfilter"
        id="miniEqfilter"
        label="filter"
        variant="outlined"
        value={eqNameSearchInnerValue}
        onChange={(e) => setEqNameSearchInnerValue(e.target.value)}
      />
    </div>
  );
};
