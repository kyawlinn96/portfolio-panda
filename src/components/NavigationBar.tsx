"use client";
import { circle, hstack, stack } from "../../styled-system/patterns";
import Image from "next/image";
import { css } from "../../styled-system/css";
import { usePathname } from "next/navigation";
import HeaderText from "@/components/icons/HeaderText";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionComponent from "@/components/TransitionComponent";
import { useState } from "react";

const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Resume", path: "/resume" },
  { id: 4, title: "Project", path: "/projects" },
  { id: 5, title: "Contact", path: "/contact" },
];

const NavigationBar = () => {
  const currRoute = usePathname();
  const [sticky, setSticky] = useState(false);
  return (
    <div
      className={hstack({
        justifyContent: "space-between",
        alignItems: "center",
        px: "4rem",
        py: ".5rem",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 99,
        bg: "main-bg",
      })}
    >
      <TransitionComponent ix="-10rem" ax={0} ds={0.3} type="spring">
        <div className={hstack({ alignItems: "center" })}>
          <div className={circle({ size: 60, overflow: "hidden" })}>
            <Image
              src="/images/happy.png"
              alt="logo"
              width={120}
              height={120}
            />
          </div>
          <HeaderText
            className={css({
              color: "secondary",
              fill: "secondary",
              width: "100px",
              ml: -16,
            })}
          />
        </div>
      </TransitionComponent>
      <TransitionComponent ix="10rem" ax={0} ds={0.3} type="spring">
        <div className={hstack({ gap: 16, my: "auto" })}>
          {navItems.map((item) => (
            <Link href={item.path}>
              <div
                key={item.id}
                className={stack({
                  gap: 8,
                  w: "100px",
                  justifyContent: "center",
                  alignItems: "center",
                  h: "60px",
                })}
              >
                <h3
                  className={css({
                    cursor: "pointer",
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "fira",
                    fontWeight: 400,
                    textTransform: "initial",
                    transition: "color .3s ease-in",
                    "&:hover": {
                      color: "secondary",
                    },
                  })}
                >
                  {item.title}
                </h3>
                <motion.div
                  initial={{ x: "-5rem", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "5rem", opacity: 0 }}
                  className={css({
                    height: "2px",
                    borderRadius: "5px",
                    width: "70%",
                    bg: currRoute === item.path ? "secondary" : "transparent",
                  })}
                />
              </div>
            </Link>
          ))}
        </div>
      </TransitionComponent>
    </div>
  );
};
export default NavigationBar;
