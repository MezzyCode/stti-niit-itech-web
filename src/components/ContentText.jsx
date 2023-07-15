import { PortableText } from '@portabletext/react';
import style from './ContentText.module.css';

const ContentText = ({ value }) => {
  return (
    <div className={style.container}>
      <PortableText
        value={value}
      />
    </div>
  )
}

export default ContentText;