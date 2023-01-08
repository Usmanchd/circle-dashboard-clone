import Image from "next/image";
import { CardItem, Status } from "../../interfaces";
import BoardCard from "../BoardCard";
import styles from "./board.module.css";

interface IProps {
  data: CardItem[];
  status: Status;
  color: string;
  isDragging: boolean;
  itemDragged: number | null;
  handleUpdateList: (id: number, status: any) => void;
  handleDragging: (dragging: boolean) => void;
  setItemDragged: (item: number | null) => void;
}

export default function Board({
  data,
  status,
  color,
  isDragging,
  itemDragged,
  handleDragging,
  handleUpdateList,
  setItemDragged,
}: IProps) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData("text"), status);
    handleDragging(false);
    setItemDragged(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <div
      className={styles.boardWrapper}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className={styles.heading} style={{ borderColor: color }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span>{status}</span>
          <span className={styles.quantity}>{data.length}</span>
        </div>
        <div className={styles.options}>
          <Image
            src="/assets/icons/settings.png"
            width={16}
            height={16}
            alt=""
          />
          <Image src="/assets/icons/plus.png" width={16} height={16} alt="" />
        </div>
      </div>
      <div className={styles.contentList}>
        {data.map((d) => (
          <BoardCard
            key={d.id}
            {...d}
            handleDragging={handleDragging}
            setItemDragged={setItemDragged}
            itemDragged={itemDragged}
          />
        ))}
      </div>
      <div className={styles.addNew}>+ New Task</div>
    </div>
  );
}
