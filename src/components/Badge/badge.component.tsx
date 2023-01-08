import styles from "./badge.module.css";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  dotStyle?: React.CSSProperties;
  color?: string;
  width?: number | string;
  height?: number | string;
}

export default function Badge({
  children,
  style = {},
  dotStyle = {},
  color = "#00c637",
  width = 12,
  height = 12,
}: IProps) {
  return (
    <div className={styles.badgeWrapper} style={style}>
      <div
        className={styles.badge}
        style={{ backgroundColor: color, width, height, ...dotStyle }}
      />
      {children}
    </div>
  );
}
