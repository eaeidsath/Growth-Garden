import { useState } from "react";
import CreateNewActivity from "../CreateNewActivity/CreateNewActivity";
import { ModalWrapper, Overlay } from "../Modal/Modal.styles";
import Modal from "../Modal/Modal";

export default function NewActivityModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}> Add New Activity </button>
      {isOpen && (
        <>
          <Overlay onClick={toggleModal} />
          <ModalWrapper>
            <h2> Log New Activity </h2>
            <CreateNewActivity />
            <button onClick={toggleModal}>Close</button>
          </ModalWrapper>
        </>
      )}
    </>
  );
}
