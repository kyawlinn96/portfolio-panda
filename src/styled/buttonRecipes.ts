import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

const buttonRecipes = cva({
  base: {
    cursor: "pointer",
    borderRadius: "13px",
    boxShadow: "4px 4px 0 #000000",
    border: "3px solid #000",
    transition: "background .3s ease-in",
    "&:hover": {
      bg: "main-bg",
      color: "white",
    },
  },
  variants: {
    visual: {
      solid: { bg: "whitesmoke", color: "main-bg" },
      outlined: { bg: "secondary", color: "primary" },
    },
    size: {
      sm: { padding: 4, fontSize: "12px" },
      lg: { padding: 8, fontSize: "24px" },
    },
  },
  compoundVariants: [
    {
      visual: "solid",
      size: "sm",
      css: { borderColor: "secondary", borderWidth: "4px" },
    },
  ],
  defaultVariants: {
    visual: "solid",
    size: "lg",
  },
});

export const Button = styled("button", buttonRecipes);
