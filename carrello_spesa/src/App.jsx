

function App() {
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
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
