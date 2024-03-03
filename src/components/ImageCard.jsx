import * as css from "./ImageCard.module.css"

const ImageCard = ({ smallUrl, largeUrl }) => {
  return (
    <div>
      <img src={smallUrl} alt="" data-url={largeUrl} className={css.card}/>
    </div>
  );
};

export default ImageCard;
