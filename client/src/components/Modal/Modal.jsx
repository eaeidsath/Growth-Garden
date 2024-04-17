import { useState } from 'react';
import CreateNewGoal from '../CreateNewGoal/CreateNewGoal';
import { ModalWrapper, Overlay } from './Modal.styles';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
      <button onClick={toggleModal}>Add New Goal</button>
      {isOpen && (
        <>
          <Overlay onClick={toggleModal} />
          <ModalWrapper>
            <h2>Add New Goal</h2>
            <CreateNewGoal />
            <button onClick={toggleModal}>Close</button>
          </ModalWrapper>
        </>
      )}
    </>
  );
};
