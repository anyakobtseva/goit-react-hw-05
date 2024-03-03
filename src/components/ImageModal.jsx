import Modal from "react-modal";
import * as css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ImageModal = (props) => {
  return (
    <Modal isOpen={props.modalOpen} onRequestClose={props.onRequestClose} style={customStyles}>
      <img className={css.image} src={props.url}></img>
    </Modal>
  );
};

export default ImageModal;
