import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutLinkIcon() {
  return (
    <div className='about-link'>
      <Link
        to={{
          pathname: '/about',
          // query param
          search: '?sort=name'
        }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutLinkIcon
