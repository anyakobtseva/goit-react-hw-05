import Modal from "react-modal";
import * as css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
};

const hiddenStyle = {
    overlay: {
        display: 'none',
      },
      content: {
        display: 'none',
      },
};

const ImageModal = (props) => {
  return (
    <Modal
      isOpen={props.modalOpen}
      onRequestClose={props.onRequestClose}
      style={props.didLoad ? customStyles : hiddenStyle}
    >
      <img className={css.image} src={props.url} onLoad={props.onLoad}></img>
    </Modal>
  );
};

export default ImageModal;
