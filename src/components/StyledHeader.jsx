import './styled-header.css'

export const StyledHeader = ({ title = 'Styled Header', variant = '', headingLevel = 2 }) => {
    const Heading = `h${headingLevel}`;
    return (
        <div className='styled-header'>
            <hr className={`${(variant === 'left' || variant === 'center') ? '' : 'hidden'}`} />
            <Heading>{title}</Heading>
            <hr className={`${(variant === 'right' || variant === 'center') ? '' : 'hidden'}`} />
        </div>
    );
};