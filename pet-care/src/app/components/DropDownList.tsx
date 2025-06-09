import React, { SetStateAction } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type DropDownListProps = {
  listItems: string[];
  state: string;
  setState: React.Dispatch<SetStateAction<string>>;
};

const DropDownList = ({ listItems, state, setState }: DropDownListProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };
  console.log("Vad får jag:", listItems);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="dropDownList">Välj tjänst</InputLabel>
        <Select
          labelId="dropDownList"
          id="dropDown"
          value={state}
          label="Kategorier"
          onChange={handleChange}
        >
          {listItems.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownList;
