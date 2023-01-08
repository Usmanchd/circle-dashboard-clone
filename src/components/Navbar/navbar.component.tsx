import Image from "next/image";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { navbar, secondaryNav } from "../../__mock_data__";
import Avatar from "../Avatar";
import Badge from "../Badge";
import Navlink from "../Navlink";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsCollapsed(width <= 960);
  }, [width]);

  return (
    <aside
      className={
        isCollapsed
          ? [styles.navbar, styles.navbarCollapsed].join(" ")
          : styles.navbar
      }
      style={
        !isCollapsed
          ? {
              minWidth: "210px",
              position: width <= 960 ? "fixed" : "sticky",
              zIndex: 10,
            }
          : {}
      }
    >
      <div className={styles.logo}>
        {isCollapsed ? (
          <Image
            src={"/assets/icons/logo-collapsed.png"}
            width={32}
            height={28}
            alt=""
          />
        ) : (
          <Image
            src={"/assets/icons/logo.png"}
            width={180}
            height={80}
            alt=""
          />
        )}
      </div>
      <div
        className={styles.arrow}
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{ transform: `rotate(${isCollapsed ? 180 : 0}deg)` }}
      >
        <Image src="/assets/icons/arrow.png" width={20} height={20} alt="" />
      </div>
      <div className={styles.navWrapper}>
        <ul className={styles.links}>
          {navbar.map((nav) => (
            <Navlink key={nav.name} {...nav} />
          ))}
        </ul>
        <div>
          <ul className={styles.links}>
            {secondaryNav.map((nav) => (
              <Navlink key={nav.name} {...nav} />
            ))}
            <div className={styles.divider} />
          </ul>
          <div style={{ height: 60 }}>
            <div className={styles.avatars}>
              {new Array(4).fill("mock").map((_, i) => (
                <Badge
                  key={i}
                  dotStyle={isCollapsed ? { display: "none" } : {}}
                >
                  <Avatar
                    src="/assets/icons/avatar.jpg"
                    style={{
                      zIndex: 5 - i,
                      border: "2px solid #ffffff",
                      left: isCollapsed ? 0 : i * 20,
                    }}
                  />
                </Badge>
              ))}
              <Image
                src="/assets/icons/collapse-arrow.png"
                width={14}
                height={14}
                alt=""
                className={styles.collapseArrow}
                style={{
                  left: 140,
                  top: 20,
                  transform: "rotate(180deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
