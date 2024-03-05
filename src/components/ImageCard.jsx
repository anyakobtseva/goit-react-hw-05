import * as css from "./ImageCard.module.css"

const ImageCard = ({ smallUrl, largeUrl, description }) => {
  return (
    <>
      <img src={smallUrl} alt={description} data-url={largeUrl} className={css.card}/>
    </>
  );
};

export default ImageCard;
