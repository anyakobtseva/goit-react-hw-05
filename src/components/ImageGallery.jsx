import * as css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images }) => {
  console.log("images", images);
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.item}>
            <ImageCard url={image.urls.small} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
