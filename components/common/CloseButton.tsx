import Close_icon from "@/public/svg/common/Close_icon";

type CloseButtonProps = {
  onClose: () => void;
};
const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button onClick={onClose}>
      <Close_icon />
    </button>
  );
};

export default CloseButton;
