import React from 'react'

const Pagination = ( { postsPerPage, totalPosts, paginate }) => {

    //pages numbers
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i) 
  } 
    return (
    <nav className='pagination'>
        {pageNumbers.map(n => (
            <li key={n} className='page-item'>
                <a onClick={ () => paginate(n) } href="!#" className='page-link'>
                    {n}
                </a>
            </li>
        )
        )}
    </nav>
  )
}

export default Pagination