import { nanoid } from "nanoid";
import * as css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul
      className={css.gallery}
      onClick={(event) => {
        event.nativeEvent.stopImmediatePropagation();

        if (event.target.attributes.getNamedItem("data-url"))
          onClick(event.target.attributes.getNamedItem("data-url").value);
      }}
    >
      {images.map((image) => {
        return (
          <li key={nanoid()} className={css.item}>
            <ImageCard smallUrl={image.urls.small} largeUrl={image.urls.full} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
