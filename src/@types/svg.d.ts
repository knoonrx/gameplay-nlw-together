declare module "*.svg" {
    import { SVGProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}