import { nanoid } from "nanoid";
import * as css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul
      className={css.gallery}
      onClick={(event) => {
        event.nativeEvent.stopImmediatePropagation();
        const attributes = event.target.attributes;

        if (
          attributes.getNamedItem("data-url") &&
          attributes.getNamedItem("alt")
        )
          onClick(
            event.target.attributes.getNamedItem("data-url").value,
            attributes.getNamedItem("alt").value
          );
      }}
    >
      {images.map((image) => {
        return (
          <li key={nanoid()} className={css.item}>
            <ImageCard
              smallUrl={image.urls.small}
              largeUrl={image.urls.full}
              description={image.description || "No description"}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
