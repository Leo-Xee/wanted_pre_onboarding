import React from "react";

import Toggle from "./components/Toggle";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="flex flex-col justify-center last:mb-40">
      <Toggle />
      <Modal>
        <div>Hello, CodeStates</div>
      </Modal>
      <Tab />
      <Tag />
    </div>
  );
}

export default App;
