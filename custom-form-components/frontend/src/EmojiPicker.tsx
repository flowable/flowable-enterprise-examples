import * as React from "react";
import { Model, _ } from "@flowable/forms";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export function EmojiPicker(props: Model.Props) {
  const { config } = props;
  return (
    <div id={config.id} className="flw__component">
      <Picker emoji={props.config.value} onSelect={(emoji) => props.onChange(emoji.id)} />
    </div>
  );
}
