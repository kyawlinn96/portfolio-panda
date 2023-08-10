"use client";

import Image from "next/image";
import { circle, hstack, stack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

const PandaCard = () => {
  return (
    <div
      className={css({
        border: "3px solid #000000",
        boxShadow: "4px 4px 0px #000000",
        bg: "whitesmoke",
        borderRadius: "13px",
        padding: 30,
        maxWidth: "400px",
      })}
    >
      <div className={stack({ gap: 4 })}>
        <div className={hstack({ gap: 4 })}>
          <div className={circle({ size: 50, overflow: "hidden" })}>
            <Image
              src="/images/avatar.png"
              alt="avatar"
              width={120}
              height={120}
            />
          </div>
          <div>
            <h2 className={css({ fontWeight: 700 })}>Kyaw Linn Thant</h2>
            <p className={css({ color: "#D7D7D7" })}>@haro_linn</p>
          </div>
        </div>
        <blockquote className={css({ fontSize: "17px" })}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          at consequatur illum in ipsum, officia, placeat quod recusandae
          repellat tempore, tenetur voluptates! Eius error in minus molestiae
          officia sequi totam.
        </blockquote>
      </div>
    </div>
  );
};
export default PandaCard;
