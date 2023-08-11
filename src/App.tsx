import { useState } from "react";
import Modal from "./modal";

const App = () => {
  const [ showModal, setShowModal ] = useState(false);
  const showFunc = () => {
    !showModal ? setShowModal(true) : setShowModal(false);
  }

  return (
    <>
      <button onClick={showFunc}>{!showModal ? 'Show Modal' : 'Close Modal'}</button>
      {
        showModal ?
          <Modal />
        :
          null
      }
    </>
  );
}

export default App;
