import Head from "next/head";
import styles from "../styles/Home.module.css";
import BoardBar from "../components/BoardBar";
import Board from "../components/Board/board.component";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { CardItem } from "../interfaces";
import { boardData } from "../__mock_data__";
import { status } from "../constants";

export default function Dashboard() {
  const {
    isDragging,
    listItems,
    handleDragging,
    handleUpdateList,
    setItemDragged,
    itemDragged,
  } = useDragAndDrop(boardData);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Frontend Developer Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BoardBar />
        <div className={styles.board}>
          {status.map((s) => (
            <Board
              isDragging={isDragging}
              handleDragging={handleDragging}
              handleUpdateList={handleUpdateList}
              setItemDragged={setItemDragged}
              itemDragged={itemDragged}
              key={s.id}
              data={listItems.filter((m: CardItem) => m.status === s.id)}
              status={s.id}
              color={s.color}
            />
          ))}
        </div>
      </main>
    </>
  );
}
