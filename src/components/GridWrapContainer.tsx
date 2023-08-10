import { css } from "../../styled-system/css";
import { hstack, wrap } from "../../styled-system/patterns";

const GridWrapContainer = () => {
  return (
    <div className={wrap({})}>
      <div className={css({ width: "200px", h: "200px", bg: "red" })} />
      <div className={css({ width: "200px", h: "200px", bg: "green" })} />
      <div className={css({ width: "200px", h: "200px", bg: "orangered" })} />
      <div className={css({ width: "200px", h: "200px", bg: "aliceblue" })} />
      <div className={css({ width: "200px", h: "200px", bg: "lightcoral" })} />
      <div className={css({ width: "200px", h: "200px", bg: "slategrey" })} />
    </div>
  );
};
export default GridWrapContainer;
