import Link from "common/models/Link";

interface AboutData {
  photo: string;
  speciality: string;
  description: string;
  actions: Link[];
}

export default AboutData;
