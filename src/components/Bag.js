import React from 'react'
import {Link} from 'react-router-dom'

function Bag(props) {
  return (
    <div>
       <Link to={`/bags/${props.id}`}><h3>{props.name}</h3></Link>
    </div>
  )
}

export default Bag;
