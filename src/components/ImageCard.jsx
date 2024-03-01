import * as css from "./ImageCard.module.css"

const ImageCard = ({ url }) => {
  return (
    <div>
      <img src={url} alt="" className={css.card}/>
    </div>
  );
};

export default ImageCard;
