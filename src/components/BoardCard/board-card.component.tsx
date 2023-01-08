import Image from "next/image";
import { colorCoding } from "../../constants";
import Avatar from "../Avatar";
import styles from "./board-card.module.css";

interface IProps {
  id: number;
  status: string;
  type: string;
  title: string;
  description?: string;
  attachments: number;
  flag: string;
  date: string;
  comments: number;
  itemDragged: number | null;
  handleDragging: (dragging: boolean) => void;
  setItemDragged: (item: number | null) => void;
}

export default function BoardCard({
  id,
  type,
  title,
  description,
  attachments,
  flag,
  date,
  comments,
  itemDragged,
  handleDragging,
  setItemDragged,
}: IProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${id}`);
    handleDragging(true);
    setItemDragged(id);
  };
  const handleDragEnd = () => handleDragging(false);

  return (
    <div
      className={styles.card}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={
        itemDragged === id
          ? {
              border: "2px dashed #eaeaea",
              transform: "scale(1.1) rotate(-10deg)",
            }
          : {}
      }
    >
      <div className={styles.type}>
        <div
          className={styles.indicator}
          style={{ backgroundColor: colorCoding[type] }}
        />
        <p>{type}</p>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
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
      <div className={styles.divider} />
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.iconWrapper}>
            <Image
              src="/assets/icons/attachment.png"
              width={18}
              height={18}
              alt=""
            />
            <p>{attachments}</p>
          </div>

          <div className={styles.iconWrapper}>
            <Image
              src="/assets/icons/flag.png"
              width={18}
              height={18}
              alt=""
              style={{
                filter:
                  "invert(47%) sepia(93%) saturate(413%) hue-rotate(84deg) brightness(100%) contrast(86%)",
              }}
            />
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/assets/icons/clock.png"
              width={18}
              height={18}
              alt=""
            />
            <p>{date}</p>
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <Image
            src="/assets/icons/comment.png"
            width={18}
            height={18}
            alt=""
          />
          <p>{comments}</p>
        </div>
      </div>
    </div>
  );
}
