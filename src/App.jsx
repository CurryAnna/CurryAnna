import Navbar from './components/Navbar'
import FAQ from './Pages/FAQ'
import Hero from './Pages/Hero'
import Footer from './Pages/Footer'
export default function App() {
  return (
    <div className="main">
      <div id='Hero'>
        <Navbar />
        <Hero />
      </div>
      <div>
        <FAQ />
      </div>
      <div className='bg-black flex justify-center items-center flex-col'>
        <Footer />
      </div>
    </div>
  )
}