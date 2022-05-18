import { env } from "config";

enum FileNames {
  CV = "CV",
}

enum FileWithExtensionNames {
  CV = "cv.pdf",
}

type Files = {
  [fileName in FileNames]: string;
};

const Files: Files = {
  [FileNames.CV]: `${env.assetsPath}/files/${FileWithExtensionNames.CV}`,
};

export { Files, FileNames };
