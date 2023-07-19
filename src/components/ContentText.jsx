import { PortableText } from '@portabletext/react';
import style from './ContentText.module.css';

const ContentText = ({ value, limit=false }) => {
  return (
    <div className={`${style.container} ${limit ? style.limit : ''}`}>
      <PortableText
        value={value}
      />
    </div>
  )
}

export default ContentText;