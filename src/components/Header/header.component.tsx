import Image from "next/image";
import Avatar from "../Avatar";
import Badge from "../Badge";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.tabs}>
        <div className={styles.tabItem}>
          <Image src="/assets/icons/list.png" width={20} height={20} alt="" />
          <p>List</p>
        </div>
        <div className={[styles.tabItem, styles.selected].join(" ")}>
          <Image src="/assets/icons/board.png" width={20} height={20} alt="" />
          <p>Board</p>
        </div>
        <div className={styles.tabItem}>
          <Image
            src="/assets/icons/menu-link-4.png"
            width={20}
            height={20}
            alt=""
          />
          <p>Calender</p>
        </div>
      </div>
      <div className={styles.actionsBar}>
        <div className={styles.input}>
          <Image src="/assets/icons/search.png" width={20} height={20} alt="" />
          <input
            type="text"
            placeholder="Search Task"
            className={styles.searchTask}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Badge style={{ marginTop: -6 }} color="#d62222" width={8} height={8}>
            <Image
              src="/assets/icons/message.png"
              width={20}
              height={20}
              alt=""
            />
          </Badge>
          <Badge style={{ marginTop: -6 }} color="#d62222" width={8} height={8}>
            <Image
              src="/assets/icons/notification.png"
              width={20}
              height={20}
              alt=""
            />
          </Badge>
          <Avatar src="/assets/icons/avatar.jpg" />
        </div>
      </div>
    </header>
  );
}
