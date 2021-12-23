import React from "react";
import { Form, _ } from "@flowable/forms";
import "@flowable/forms/flwforms.min.css";
import "emoji-mart/css/emoji-mart.css";

import components from "@flowable/flowable-forms-mysuite";
// import "flowable-forms-mysuite/dist/index.css";

const App = () => {
  console.log(components);
  return (
    <Form
      debug={true}
      Components={components}
      config={_.sfs.parse(`
        mysuiteHelloForms: size=12
        number: value={{num}} defaultValue=50
        mysuiteProgressBar: value={{num}}
        mysuiteProgressBarInput: value={{num}} size=12
        mysuiteEmojiPicker: value={{emoji}} size=12
        mysuitePanelComposition: value={{composition}} size=12
      `)}
    />
  );
};

export default App;
