import { Image } from "common/components/Image";

const imageMapper = ({ ...props }) => {
  if (!props.src || !props.alt) {
    throw "missing required props: src, alt";
  }

  return (
    <Image
      height={props.height}
      width={props.width}
      isLazy={true}
      src={props.src}
      alt={props.alt}
    />
  );
};

export default imageMapper;
