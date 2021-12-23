import * as React from "react";

import { storiesOf } from "@storybook/react";

import components from "../src";
import { Form, _ } from "@flowable/forms";

const formProps = {
  debug: true,
  Components: components as any,
};

storiesOf("Hello Forms", module).add("Hello", () => <Form {...formProps} config={_.sfs.parse("mysuiteHelloForms:")} />);
