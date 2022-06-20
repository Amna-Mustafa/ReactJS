import React from 'react'
import ItemDescription from './ItemDescription'
// function Product(props) {
function Product({name, description, price}) {
  return (
    <div>
      {/* <h4>{props.name}</h4>
      <h5>{props.description}</h5>
      <h6>${props.price}</h6> */}

      <ItemDescription name={name} description={description}/>
      <h6>${price}</h6>

    </div>
  )
}

export default Product
