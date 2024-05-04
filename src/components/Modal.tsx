import { useEffect, useRef } from "react";

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
      <dialog ref={modalRef} className="p-4 rounded-[8px] max-w-[500px]">
        {activeItem ? (
          <p className="text-center">
            Are you sure you want to remove{" "}
            <span className="font-bold">{activeItem.title}</span> from cart?
          </p>
        ) : (
          <p className=" text-[1.1rem]">Are you sure you want to empty cart?</p>
        )}
        <div className="text-center p-[1rem]">
          <button
            className="py-[0.5rem] px-[2rem] bg-accent-clr text-secondary-text-clr mr-[1rem] hover:outline-2 hover:outline-accent-clr hover:outline-offset-2 hover:outline"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="py-[0.5rem] px-[2rem] bg-primary-bg hover:outline-2 hover:outline-primary-bg hover:outline-offset-2 hover:outline"
            onClick={closeModal}
          >
            No
          </button>
        </div>
      </dialog>
    )
  );
}
