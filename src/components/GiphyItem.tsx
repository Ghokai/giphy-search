import React from "react";
import { Image } from "../store/models";

interface GiphyItemProps {
  image: Image;
  singleColumnList: boolean;
}

const GiphyItem: React.FC<GiphyItemProps> = ({
  image,
  singleColumnList
}: GiphyItemProps) => {
  //TO-DO: on click a tag go actual page .....
  return (
    <div
      className={
        singleColumnList
          ? "giphy-item-single-column"
          : "giphy-item-three-column"
      }
    >
      <a href={image.giphyUrl} rel="noopener noreferrer" target="_blank">
        <img
          className={
            singleColumnList
              ? "giphy-item-image-single-column"
              : "giphy-item-image-three-column"
          }
          src={image.url}
          alt={image.id}
        />
      </a>
    </div>
  );
};

export default GiphyItem;
