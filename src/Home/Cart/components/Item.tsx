import React from "react";
import { I18nManager } from "react-native";
import ItemLayout, { ItemModel } from "./ItemLayout";
import { SwipeableRow } from "./SwipeableRow";

interface ItemProps {
  onDelete?: () => void;
  onAdd?: () => void;
  onSub?: () => void;
  onToggle: (value) => void;
  item: ItemModel;
}

//  To toggle LTR/RTL change to `true`
I18nManager.allowRTL(false);

const Item = ({ onDelete, onAdd, onSub, onToggle, item }: ItemProps) => {
  return (
    <SwipeableRow onDelete={onDelete} onAdd={onAdd} onSub={onSub}>
      <ItemLayout {...{ item }} onToggle={onToggle} />
    </SwipeableRow>
  );
};

export default Item;
