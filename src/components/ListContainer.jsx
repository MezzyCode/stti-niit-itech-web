import style from './ListContainer.module.css';

// Make sure your item is using <li> elements
export const ListContainer = ({ children }) => {
  return (
    <ul className={[style.container]}>
      {children}
    </ul>
  )
}