import { useState } from 'react'

function Book({ book }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)

  function verhoogTeller() {
    setAantalKeerGelezen((huidigAantal) => huidigAantal + 1)
  }

  return (
    <li className="book-card">
      <img src={book.image} alt={`Omslag van ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
    </li>
  )
}

export default Book
