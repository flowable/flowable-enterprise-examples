import * as React from "react";
import { Model, _ } from "@flowable/forms";

const definition = {
  value: "{{tableSelection}}",
  extraSettings: {
    clientPagination: false,
    url: "{{$item.url}}",
    dataSource: "Rest",
    queryUrl: "https://swapi.dev/api/RESOURCE/?page={{$page+1}}",
    pageSize: 10,
    path: "results",
    response: {
      total: "count",
    },
  },
};
const DEFAULT_RESOURCE = "people";

const columns = {
  planets:
    "name climate diameter gravity orbital_period population rotation_period surface_water terrain",
  people: "name birth_year eye_color gender hair_color height mass skin_color",
  films: "title director episode_id opening_crawl producer release_date",
  starships:
    "name MGLT cargo_capacity consumables cost_in_credits crew hyperdrive_rating length manufacturer max_atmosphering_speed model passengers starship_class",
  vehicles:
    "name cargo_capacity consumables cost_in_credits crew length manufacturer max_atmosphering_speed model passengers vehicle_class",
  species:
    "name average_height average_lifespan classification designation eye_colors hair_colors language skin_colors",
};

export class CustomTable extends Model.FormComponent {
  render() {
    const DataTable = this.props.Components.dataTable;
    return <DataTable {...this.props} />;
  }
  static $resolve(
    unresolved: Model.Column,
    scope: Model.Payload,
    addData: Model.Payload,
    Components: Model.ComponentStore
  ) {
    const resolve = Components.panel.$resolve;
    let resource = _.evalExpression(unresolved?.extraSettings?.resource, {
      ...addData,
      ...scope,
    });
    let resourceColumns = columns[resource];
    if (!resourceColumns) {
      resourceColumns = columns[DEFAULT_RESOURCE];
      resource = DEFAULT_RESOURCE;
    }
    const colDefinition = {
      extraSettings: {
        queryUrl: definition.extraSettings.queryUrl.replace(
          "RESOURCE",
          resource
        ),
        columns: resourceColumns
          .split(" ")
          .map((x: string) => ({ label: x, accessor: x })),
      },
    };
    return resolve(
      _.mergeDeepAll([unresolved, definition, colDefinition]),
      scope,
      addData,
      Components
    );
  }
}
