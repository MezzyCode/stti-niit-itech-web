import 'material-icons/iconfont/filled.css';
import { SocialIcon } from 'react-social-icons';

export default function Icon({ name, className }) {
    return (
        <span className={`material-icons ${className}`}> {name} </span>
    );
}

//Use CSS Variable to set the color
export const Sosmed = ({ url, bgColor, fgColor }) => {
    bgColor = bgColor ? `var(${bgColor})` : 'none';
    fgColor = fgColor ? `var(${fgColor})` : 'none';
    
    return (
        <SocialIcon
            url={url}
            bgColor={bgColor}
            fgColor={fgColor}
        />
    )
}