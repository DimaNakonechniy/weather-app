import { useState, SyntheticEvent } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    setSearchValue(value);
  };

  return (
    <form noValidate autoComplete="off">
      <Stack direction="row" spacing={2} my={2}>
        <TextField
          id="name"
          label="Your city name"
          fullWidth
          value={searchValue}
          onChange={onChange}
        />

        <Button type="submit" fullWidth disabled={!searchValue.length}>
          Search
        </Button>
      </Stack>
    </form>
  );
};
export default SearchForm;
