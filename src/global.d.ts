declare module "*.svg?react" {
  import { ReactElement, SVGProps } from "react";
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}
