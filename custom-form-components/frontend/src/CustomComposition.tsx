import * as React from "react";
import { Model, _ } from "@flowable/forms";
import { ComponentStore } from "@flowable/forms/Model";

const checkDefinition = {
  type: "boolean",
  value: "{{boolVal}}"
};
const textDefinition = {
  type: "text",
  value: "{{textVal}}"
};

export class CustomComposition extends Model.FormComponent {
  render() {
    const { Components, config, onChange } = this.props;
    const definition = config as Model.ResolvedColumn & {
      resolvedText: Model.ResolvedColumn;
      resolvedCheck: Model.ResolvedColumn;
    };
    const Text = Components.text;
    const Boolean = Components.boolean;
    if (!definition.resolvedCheck) {
      return null;
    }
    return (
      <div>
        <Text
          {...this.props}
          config={definition.resolvedText}
          onChange={val => onChange({ $path: definition.resolvedText.$path, $value: val })}
        />
        <Boolean
          {...this.props}
          config={definition.resolvedCheck}
          onChange={val => onChange({ $path: definition.resolvedCheck.$path, $value: val })}
        />
      </div>
    );
  }
  static $resolve(unresolved: Model.Column, scope: Model.Payload, addData: Model.Payload, Components: ComponentStore) {
    const resolve = Components.panel.$resolve;
    const resolved = resolve(unresolved, scope, addData);
    const disabled = resolved.enabled === false;
    const resolvedCheck = resolve(checkDefinition, resolved.value, addData, disabled);
    const resolvedText = resolve(textDefinition, resolved.value, addData, disabled);
    return { ...resolved, resolvedCheck, resolvedText };
  }
}
