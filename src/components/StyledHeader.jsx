import styles from './StyledHeader.module.css';

export const StyledHeader = ({ title = 'Styled Header', variant = '', headingLevel = 2 }) => {
    // const leftHr = (variant === 'left' || variant === 'center') ? true : false;
    const rightHr = (variant === 'right' || variant === 'center') ? true : false;

    const Heading = `h${headingLevel}`;
    return (
        <div className={styles.container}>
            {/* {leftHr ? <hr /> : ''} */}
            <Heading className={styles.header}>{title}</Heading>
            {rightHr ? <hr /> : ''}
        </div>
    );
};