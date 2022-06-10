import { ButtonProps } from "@mui/material";

const MuiButtonDefaultProps: ButtonProps = {
  color: "primary",
  variant: "contained",
};

const MuiButton = {
  defaultProps: MuiButtonDefaultProps,
  styleOverrides: {
    root: {
      border: "2px solid transparent",
      textTransform: "none" as const,
      fontWeight: "700",
      fontSize: "16px",
    },
  },
};

export default MuiButton;
