import * as React from "react";
import { Model, _ } from "@flowable/forms";

export function ProgressBar(props: Model.Props) {
  const { config } = props;
  const max = config?.extraSettings?.max || 100;
  const val = ((config?.value || 0) * 100) / max;
  return (
    <div id={config.id} className="flw__component">
      <div
        style={{
          width: "100%",
          height: "39px",
          backgroundColor: "#dadada",
          borderRadius: "2px",
        }}
      >
        <div
          style={{
            width: `${val}%`,
            height: "100%",
            backgroundColor: val > 66 ? "#85cc00" : val > 33 ? "#ffbf00" : "#ff2e00",
            borderRadius: "2px",
            transition: "all .2s ease-out",
          }}
        />
      </div>
    </div>
  );
}
