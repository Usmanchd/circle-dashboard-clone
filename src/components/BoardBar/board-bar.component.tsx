import Image from "next/image";
import Avatar from "../Avatar/avatar.component";
import styles from "./board-bar.module.css";

export default function BoardBar() {
  return (
    <div className={styles.boardbar}>
      <div className={styles.heading}>
        <div className={styles.iconWrapper}>
          <Image src="/assets/icons/folder.png" width={20} height={20} alt="" />
        </div>
        <p>Ninja Web Design</p>
      </div>
      <div className={styles.privateBoard}>
        <div className={styles.privateBoardheading}>
          <div>
            <Image src="/assets/icons/lock.png" width={20} height={20} alt="" />
          </div>
          <p>Private Board</p>
        </div>
        <div className={styles.avatars}>
          {new Array(4).fill("mock").map((_, i) => (
            <Avatar
              key={i}
              src="/assets/icons/avatar.jpg"
              style={{
                zIndex: 5 - i,
                border: "2px solid #ffffff",
                left: i * 20,
              }}
            />
          ))}
        </div>
        <p>+4</p>
        <Image src="/assets/icons/add.png" width={32} height={32} alt="" />
      </div>
    </div>
  );
}
