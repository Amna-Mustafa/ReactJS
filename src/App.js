import React from 'react'
import Product from './components/Product'

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Product name="Amazon" description="Your AI Assistant" price={59.99}/>
      <Product name="iPhone 12 Pro max" description="The best phone" price={1200}/>
      <Product name="Macbook Pro" description="Your favourite computer" price={2500}/>
    </div>
  )
}
