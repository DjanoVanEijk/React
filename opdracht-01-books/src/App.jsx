import Header from './components/Header.jsx'
import Layout from './components/Layout.jsx'
import BookList from './components/BookList.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <BookList />
      </Layout>
    </>
  )
}

export default App
