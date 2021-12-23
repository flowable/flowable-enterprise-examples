import * as React from "react";

import { storiesOf } from "@storybook/react";

import components from "../src";
import { Form, _ } from "@flowable/forms";

const formProps = {
  debug: true,
  Components: components as any,
};

storiesOf("Progress Bar Input", module)
  .add("Basic", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`
      mysuiteProgressBarInput: value={{num}} defaultValue=13
    `)}
    />
  ))
  .add("Max 5000", () => (
    <Form
      {...formProps}
      config={_.sfs.parse(`
      mysuiteProgressBarInput: value={{num}} defaultValue=2000 [[max=5000]]
    `)}
    />
  ));
