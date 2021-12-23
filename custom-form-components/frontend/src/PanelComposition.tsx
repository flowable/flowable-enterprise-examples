import * as React from "react";
import { Model, _ } from "@flowable/forms";

const definition = {
  extraSettings: {
    layoutDefinition: {
      rows: [
        {
          cols: [
            {
              type: "boolean",
              label: "I know what I'm doing",
              value: "{{heKnows}}",
              size: 6,
            },
            {
              type: "text",
              value: "{{txtVal}}",
              enabled: "{{heKnows}}",
              size: 6,
            },
          ],
        },
      ],
    },
  },
};

export class PanelComposition extends Model.FormComponent {
  render() {
    const Panel = this.props.Components.panel;
    return (
      <div className="flw__container">
        This is the panel composition example
        <Panel {...this.props} />
      </div>
    );
  }
  static $resolve(
    unresolved: Model.Column,
    scope: Model.Payload,
    addData: Model.Payload,
    Components: Model.ComponentStore
  ) {
    const resolve = Components.panel.$resolve;
    return resolve({ ...unresolved, ...definition }, scope, addData, Components);
  }
}
