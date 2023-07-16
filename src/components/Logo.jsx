import style from './Logo.module.css';

const Logo = () => {
  return (
    <img className={style.container}
      src='/i-tech-logo.png'
      alt='Logo STTI I-Tech'
    />
  )
}

export default Logo