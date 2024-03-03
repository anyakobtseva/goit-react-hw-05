import * as css from "./ImageModal.module.css";

const ImageModal = ({ url }) => {
  return (
    <div className={css.imageBox}>
      <img className={css.image} src={url}></img>;
    </div>
  );
};

export default ImageModal;
