import { SyntheticEvent } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type SearchFormProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const SearchForm = ({
  value: searchValue,
  onChange,
  onSubmit,
}: SearchFormProps) => {
  const handleChange = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    onChange(value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form noValidate autoComplete="off">
      <Stack direction="row" spacing={2} my={2}>
        <TextField
          id="name"
          label="Your city name"
          fullWidth
          value={searchValue}
          onChange={handleChange}
        />

        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={!searchValue.length}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};
export default SearchForm;
