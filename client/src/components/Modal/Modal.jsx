import { useState } from 'react';
import { ModalWrapper, Overlay } from './Modal.styles';

export default function Modal({ buttonLabel, modalTitle, component: Component }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  
    return (
      <>
      <button onClick={openModal}>{buttonLabel}</button>
      {isOpen && (
        <>
          <Overlay onClick={closeModal} />
          <ModalWrapper>
            <h2>{modalTitle}</h2>
            <Component closeModal={closeModal} />
          </ModalWrapper>
        </>
      )}
    </>
  );
};
