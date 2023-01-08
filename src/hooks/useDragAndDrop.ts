import { useState } from "react";
import { CardItem, Status } from "../interfaces";

export const useDragAndDrop = (initialState: CardItem[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState(initialState);
  const [itemDragged, setItemDragged] = useState<number | null>(null);

  const handleUpdateList = (id: number, status: Status) => {
    let card = listItems.find((item: CardItem) => item.id === id);

    if (card && card.status !== status) {
      card.status = status;
      if (Array.isArray(listItems)) {
        setListItems((prev: CardItem[]) => [
          card!,
          ...prev.filter((item: CardItem) => item.id !== id),
        ]);
      }
    }
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    listItems,
    itemDragged,
    handleUpdateList,
    handleDragging,
    setItemDragged,
  };
};
