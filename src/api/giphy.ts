import axios from "axios";
import { Image } from "../store/models";
import {
  GIPHY_API_KEY,
  GIPHY_API_PARAMETER_LANG,
  GIPHY_API_PARAMETER_LIMIT_SINGLE_COLUMN,
  GIPHY_API_PARAMETER_RATING,
  GIPHY_API_URL,
  GIPHY_API_PARAMETER_LIMIT_THREE_COLUMN
} from "../config";

export const fetchGiphyImages = async (
  term: string,
  singleColumnList: boolean,
  offset: number
): Promise<Image[]> => {
  const response = await axios.get(GIPHY_API_URL, {
    params: {
      api_key: GIPHY_API_KEY,
      q: term,
      limit: singleColumnList
        ? GIPHY_API_PARAMETER_LIMIT_SINGLE_COLUMN
        : GIPHY_API_PARAMETER_LIMIT_THREE_COLUMN,
      offset,
      rating: GIPHY_API_PARAMETER_RATING,
      lang: GIPHY_API_PARAMETER_LANG
    }
  });

  const imageList: Image[] = response.data.data.map((giphy: any) => ({
    id: giphy.id,
    url: giphy.images.downsized.url,
    giphyUrl: giphy.url
  }));

  return imageList;
};
