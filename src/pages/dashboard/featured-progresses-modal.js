import { Modal } from "../../components/modal";

export const FeaturedProgressesModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4 text-background-900">
        <div className="mb-4">Featured progresses</div>
      </div>
    </Modal>
  );
};
