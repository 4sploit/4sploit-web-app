import { env } from "config";

enum FileNames {
  CV = "cv.pdf",
}

type Files = {
  [fileName in FileNames]: string;
};

const Files: Files = {
  [FileNames.CV]: `${env.assetsPath}/files/${FileNames.CV}`,
};

export { Files, FileNames };
