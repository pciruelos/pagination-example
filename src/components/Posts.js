import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
  return <ul className='list-group mb-4'>
    {posts.map(p => ( 
    <li key={p.id} className="list-group-item">
        {p.title}
    </li>
    ))}
  </ul>
}

export default Posts