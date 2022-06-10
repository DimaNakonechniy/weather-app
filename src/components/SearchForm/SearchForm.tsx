import { useState, SyntheticEvent } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type SearchFormProps = {
  value: string;
  onSubmit: (value: string) => void;
};

const SearchForm = ({ value: searchValue, onSubmit }: SearchFormProps) => {
  const [search, setSearch] = useState<string>(searchValue);

  const handleChange = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    setSearch(value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit(search);
  };

  return (
    <form noValidate autoComplete="off">
      <Stack direction="row" spacing={2} my={2}>
        <TextField
          id="name"
          label="Your city name"
          fullWidth
          value={search}
          onChange={handleChange}
        />

        <Button type="submit" onClick={handleSubmit} disabled={!search.length}>
          Search
        </Button>
      </Stack>
    </form>
  );
};
export default SearchForm;
