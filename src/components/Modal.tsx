import { useEffect, useRef } from "react";

type ModalProps = {
  isModalOpen: boolean;
};

export default function Modal({ isModalOpen }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>();

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
        <button>No</button>
      </div>
    </dialog>
  );
}
