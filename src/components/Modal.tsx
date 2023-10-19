import { useEffect, useRef } from "react";

type ModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

export default function Modal({ isModalOpen, closeModal }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef}>
      <p>Are you sure you want to delete this item?</p>
      <div className="modal-button-wrapper">
        <button>Yes</button>
        <button onClick={closeModal}>No</button>
      </div>
    </dialog>
  );
}
