import { Image } from "../../store/models";

const testData: Image[] = [
  {
    id: "id_1",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  },
  {
    id: "id_2",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  },
  {
    id: "id_3",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  },
  {
    id: "id_4",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  },
  {
    id: "id_5",
    url: "https://via.placeholder.com/150",
    giphyUrl: "https://www.google.com/"
  }
];

export const fetchGiphyImages = async (
  term: string,
  singleColumnList: boolean,
  offset: number
): Promise<Image[]> => {
  const imageList = await new Promise<Image[]>(resolve => resolve(testData));

  return imageList;
};
