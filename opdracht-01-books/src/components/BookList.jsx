import { useState } from 'react'
import './BookList.css'

function BookList() {
  const [books] = useState([
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      image: '/images/book-1.png',
    },
    {
      id: 2,
      title: 'Fantasia VI',
      author: 'Geronimo Stilton',
      image: '/images/book-2.png',
    },
    {
      id: 3,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      image: '/images/book-3.png',
    },
  ])

  return (
    <section>
      <h1>Opdracht 1 - Books</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li className="book-card" key={book.id}>
            <img src={book.image} alt={`Omslag van ${book.title}`} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BookList
