"use client";

import { motion } from "framer-motion";
import React from "react";
import { css } from "../../styled-system/css";
import { JsxStyleProps } from "../../styled-system/types";

type wrapperProps = {
  children: React.ReactNode;
  bgColor: JsxStyleProps["bgColor"];
  paddingY: JsxStyleProps["paddingY"];
};

const PageWrapper = ({ children, bgColor, paddingY }: wrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={css({
        width: "100%",
        height: "dvh",
        px: "4rem",
        py: paddingY,
        bgColor: bgColor,
        mt: "4rem",
      })}
    >
      {children}
    </motion.div>
  );
};
export default PageWrapper;
