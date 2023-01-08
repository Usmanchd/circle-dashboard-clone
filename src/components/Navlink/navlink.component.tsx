import Image from "next/image";
import React, { useState } from "react";
import { NavLink } from "../../interfaces";
import styles from "../Navbar/navbar.module.css";

export default function Navlink(props: NavLink) {
  const [showChild, setShowChild] = useState(!!props.active);
  return (
    <>
      <li
        className={
          props.active
            ? [styles.linkItem, styles.selected].join(" ")
            : styles.linkItem
        }
        onClick={() => setShowChild(!showChild)}
      >
        <Image src={props.icon} width={20} height={20} alt="" />
        <p>{props.name}</p>
        {props.notifications && (
          <span className={styles.quantity}>{props.notifications}</span>
        )}
        {props.child && (
          <Image
            src="/assets/icons/collapse-arrow.png"
            width={14}
            height={14}
            alt=""
            className={styles.collapseArrow}
            style={{ transform: `rotate(${showChild ? 0 : 180}deg)` }}
          />
        )}
      </li>
      <ul>
        {props.child &&
          showChild &&
          props.child.map((childNav, i) => (
            <React.Fragment key={childNav.name}>
              <li
                className={
                  childNav.active
                    ? [styles.linkItemChild, styles.selected].join(" ")
                    : styles.linkItemChild
                }
                style={{ marginLeft: 22, position: "relative" }}
                title={childNav.name}
              >
                <div
                  className={styles.arrowLine}
                  style={{
                    height: i * 18 + 20,
                    top: -22 * i + 2,
                    borderColor: childNav.active ? "#26b44d" : "#afafaf",
                  }}
                />
                <Image src={childNav.icon} width={14} height={14} alt="" />
                <p>{childNav.name}</p>
              </li>
              {childNav.divider && <div className={styles.divider} />}
            </React.Fragment>
          ))}
      </ul>
      {props.divider && <div className={styles.divider} />}
    </>
  );
}
