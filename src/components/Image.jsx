import Altr from "../assets/altr.png";

export default function Image({ src, alt, ...rest }) {
    return <img src={src || Altr} alt={alt} {...rest} />
}