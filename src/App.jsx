import React from "react";

import Toggle from "./components/Toggle";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Toggle />
      <Modal>
        <div>Hello, CodeStates</div>
      </Modal>
    </div>
  );
}

export default App;
