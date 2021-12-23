import { configure } from "@storybook/react";

function loadStories() {
  require("../stories");
  require.context("../stories", true, /.stories.tsx$/);
}

configure(loadStories, module);
