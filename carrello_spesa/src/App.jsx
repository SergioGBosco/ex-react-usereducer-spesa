import { useState } from "react";


function App() {

  const [addedProducts, setAddedProducts] = useState([]);
  console.log(addedProducts)

  const addToCart = product => {
    const prodottoAggiungo = addedProducts.some(p => p.name === product.name);
    if (prodottoAggiungo) {
      return
    }
    setAddedProducts(valoreAttuale => [...valoreAttuale, {
      ...product,
      quantity: 1
    }])
  }

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <>
      <h1>La lista dei prodotti</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} ({p.price.toFixed(2)}€)
            <button onClick={() => addToCart(p)}>Aggiungi al Carrello</button>
          </li>
        ))}
      </ul>
      {addedProducts.length > 0 && (<>
        <h2>Carrello della spesa</h2>
        <ul>
          {addedProducts.map((p, i) => (
            <li key={i}>
              <p>{p.quantity} x {p.name} ({p.price.toFixed(2)}€)</p>
            </li>
          ))}
        </ul>
      </>)}


    </>
  )
}

export default App
