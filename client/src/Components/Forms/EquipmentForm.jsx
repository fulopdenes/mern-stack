import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const EquipmentForm = ({ onSave, disabled, equipment, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const equipment = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(equipment);
  };

  return (
    <Box
      sx={{ margin: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}
      component="form"
      onSubmit={onSubmit}
    >
      {equipment && (
        <input type="hidden" name="_id" defaultValue={equipment._id} />
      )}

      <FormControl fullWidth>
        <TextField
          defaultValue={equipment ? equipment.name : null}
          name="name"
          id="name"
          label="Name"
          variant="outlined"
          required
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={equipment ? equipment.type : null}
          name="type"
          id="type"
          label="Type"
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          defaultValue={equipment ? equipment.amount : null}
          name="amount"
          id="amount"
          label="Amount"
          variant="outlined"
          required
        />
      </FormControl>

      <div>
        <Button
          sx={{ marginRight: "1rem" }}
          variant="contained"
          type="submit"
          disabled={disabled}
        >
          {equipment ? "Update Equipment" : "Create Equipment"}
        </Button>

        <Button variant="contained" color="warning" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Box>
  );
};

export default EquipmentForm;
