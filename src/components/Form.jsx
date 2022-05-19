import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import useNoticias from "../hooks/useNoticias";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

const Form = () => {
  const { handleFormChange, categoria } = useNoticias();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel id="Categorias">Categorias</InputLabel>
        <Select
          onChange={handleFormChange}
          label="Categoria"
          labelId="Categorias"
          value={categoria}
        >
          {CATEGORIAS.map((categoria) => {
            return (
              <MenuItem key={categoria.value} value={categoria.value}>
                {categoria.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
