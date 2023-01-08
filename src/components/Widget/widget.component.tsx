import Image from "next/image";
import styles from "./widget.module.css";

export default function Widget() {
  return (
    <div className={styles.widget}>
      <div>
        <button>+ Task</button>
      </div>
      <div className={styles.widgetIcon}>
        <Image
          src="/assets/icons/dashboard.png"
          width={36}
          height={36}
          alt=""
        />
      </div>
    </div>
  );
}
