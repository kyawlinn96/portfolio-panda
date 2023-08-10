import { hstack } from "../../styled-system/patterns";
import { Button } from "@/styled/buttonRecipes";
import { css } from "../../styled-system/css";

const ButtonGroup = () => {
  return (
    <div className={hstack({ gap: 20, flexWrap: "wrap" })}>
      <Button visual="outlined">Sign</Button>
      <Button visual="solid" className={css({ width: "300px" })}>
        Sign
      </Button>
    </div>
  );
};
export default ButtonGroup;
