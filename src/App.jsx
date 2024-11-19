import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Collection from './pages/collection/Collection'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Product from './pages/product/Product'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <BrowserRouter 
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <Navbar />
      <SearchBox />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/collection' element= {<Collection />}/>
        <Route path='/products/:productId' element= {<Product />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/contact' element= {<Contact />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
