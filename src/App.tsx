import Cryptonews from '@components/Cryptonews/Cryptonews'
import Footer from '@components/Footer/Footer'
import Googlenews from '@components/Google/Googlenews'
import Recentnews from '@components/Recentnews/Recentnews'
import Herosection from '@components/hero/Herosection'
import Navbar from '@components/navbar/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='max-w-6xl mx-auto p-3 '>
        <Herosection />
        <Recentnews />
        <Cryptonews />
        <Googlenews />
      </div>
      <Footer />
    </>
  )
}

export default App
