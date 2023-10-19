import { useEffect, useRef } from "react";
import "../styles/modal.css";

type ModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  activeItem: ProductData | null;
  handleDelete: () => void;
};

export default function Modal({
  isModalOpen,
  closeModal,
  activeItem,
  handleDelete,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isModalOpen]);

  return (
    isModalOpen && (
      <dialog ref={modalRef}>
        {activeItem ? (
          <p>
            Are you sure you want to remove{" "}
            <span className="modal-item-title">{activeItem.title}</span> from
            cart?
          </p>
        ) : (
          <p className="empty-cart-warning">
            Are you sure you want to empty cart?
          </p>
        )}
        <div className="modal-button-wrapper">
          <button onClick={handleDelete}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      </dialog>
    )
  );
}
