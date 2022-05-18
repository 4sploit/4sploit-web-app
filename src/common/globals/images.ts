import { env } from "config";

enum ImageNames {
  Photo = "PHOTO",
}

enum ImageFileNames {
  Photo = "photo.jpg",
}

type Images = {
  [imageName in ImageNames]: string;
};

const Images: Images = {
  [ImageNames.Photo]: `${env.assetsPath}/images/${ImageFileNames.Photo}`,
};

export { Images, ImageNames };
