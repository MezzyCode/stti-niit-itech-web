import Link from 'next/link';
import './StyledLink.css'

export default function StyledLink({ name, href }) {
    return (
      <Link className='linkStyle' href={href ? '/' : ''}>
        {name}
      </Link>
    );
  }