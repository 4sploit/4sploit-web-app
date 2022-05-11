import { env } from "config";

enum ImageNames {
  Photo = "photo.jpg",
}

type Images = {
  [imageName in ImageNames]: string;
};

const Images: Images = {
  [ImageNames.Photo]: `${env.imagesPath}/${ImageNames.Photo}`,
};

export { Images, ImageNames };
