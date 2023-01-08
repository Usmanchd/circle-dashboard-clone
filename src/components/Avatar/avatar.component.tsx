import Image from "next/image";
import styles from "./avatar.module.css";

interface IProps {
  src: string;
  width?: number;
  height?: number;
  style?: any;
}

export default function Avatar({
  src,
  width = 32,
  height = 32,
  style,
}: IProps) {
  return (
    <div className={styles.avatar}>
      <Image src={src} width={width} height={height} alt="" style={style} />
    </div>
  );
}
