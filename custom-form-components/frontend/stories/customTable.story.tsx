import * as React from "react";

import { storiesOf } from "@storybook/react";

import components from "../src";
import { Form, _ } from "@flowable/forms";

const formProps = {
  debug: true,
  Components: components as any,
};

storiesOf("Custom Table", module)
  .add("Films", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`mysuiteCustomTable:[[resource=films]]`)}
    />
  ))
  .add("People", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`mysuiteCustomTable:[[resource=people]]`)}
    />
  ))
  .add("Planets", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`mysuiteCustomTable:[[resource=planets]]`)}
    />
  ))
  .add("Startships", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`mysuiteCustomTable:[[resource=starships]]`)}
    />
  ))
  .add("Vehicles", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`mysuiteCustomTable:[[resource=vehicles]]`)}
    />
  ))
  .add("Species", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`mysuiteCustomTable:[[resource=species]]`)}
    />
  ))
  .add("Selection", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`
    select: size=12 defaultValue=people label=Resource value={{res}} [[items= || text:films,value:films ||  text:people,value:people ||  text:planets,value:planets ||  text:starships,value:starships ||  text:vehicles,value:vehicles ||  text:species,value:species || ]]
    mysuiteCustomTable:[[resource={{res}}]]
  `)}
    />
  ));
