import React from "react";

import Toggle from "./components/Toggle";
import Modal from "./components/Modal";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Toggle />
      <Modal>
        <div>Hello, CodeStates</div>
      </Modal>
      <Tab />
    </div>
  );
}

export default App;
