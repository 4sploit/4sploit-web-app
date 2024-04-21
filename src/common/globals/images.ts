import { env } from "config";

enum ImageNames {
  Photo = "PHOTO",
}

enum ImageFileNames {
  Photo = "photo.jpg",
}

type Images = Record<ImageNames, string>;
const assetsPath = `${env.appBaseUrl}/${env.assetsPath}`;

const Images: Images = {
  [ImageNames.Photo]: `${assetsPath}/images/${ImageFileNames.Photo}`,
};

export { Images, ImageNames };
