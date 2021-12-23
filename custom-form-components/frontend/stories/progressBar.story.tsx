import * as React from "react";

import { storiesOf } from "@storybook/react";

import components from "../src";
import { Form, _ } from "@flowable/forms";

const formProps = {
  debug: true,
  Components: components as any,
};

storiesOf("Progress Bar", module)
  .add("10%", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`
      mysuiteProgressBar: value=10
    `)}
    />
  ))
  .add("60%", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`
      mysuiteProgressBar: value=60
    `)}
    />
  ))
  .add("100%", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`
      mysuiteProgressBar: value=100
    `)}
    />
  ))
  .add("Bound to number", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`
      mysuiteProgressBar: value={{num}} size=12
      number: label=num value={{num}} [[max=100 min=0]]
    `)}
    />
  ))
  .add("Max 5000", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`
      mysuiteProgressBar: value={{num}} size=12 [[max=5000]]
      number: label=num value={{num}} defaultValue=4500 [[max=5000 min=0]]
    `)}
    />
  ));
