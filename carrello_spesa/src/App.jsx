import { useState } from "react";


function App() {

  const [addedProducts, setAddedProducts] = useState([]);
  console.log(addedProducts)

  const updateProductQuantity = (name, quantity) => {
    setAddedProducts(valoreAttuale => valoreAttuale.map(p => {
      if (p.name === name) {
        return {
          ...p,
          quantity
        }
      }
      return p
    }))
  }

  const addToCart = product => {
    const prodottoAggiungo = addedProducts.find(p => p.name === product.name);
    if (prodottoAggiungo) {
      updateProductQuantity(prodottoAggiungo.name, prodottoAggiungo.quantity + 1)
      return;
    }
    setAddedProducts(valoreAttuale => [...valoreAttuale, {
      ...product,
      quantity: 1
    }])
  }


  const removeFromCart = product => {
    setAddedProducts(valoreAttuale => valoreAttuale.filter(p => p.name !== product.name))
  }

  const totalePagamento = addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);

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
              <button onClick={() => removeFromCart(p)}>Rimuovi dal Carrello</button>
            </li>
          ))}
        </ul>
      </>)}
      {addedProducts.length > 0 && <h3>TOTALE DA PAGARE: {totalePagamento.toFixed(2)}</h3>}


    </>
  )
}

export default App
