import * as css from "./ImageCard.module.css"

const ImageCard = ({ smallUrl, largeUrl }) => {
  return (
    <>
      <img src={smallUrl} alt="" data-url={largeUrl} className={css.card}/>
    </>
  );
};

export default ImageCard;
