import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import BannerDesc from './components/bannerdescription';
import ReadBox from './components/readbox'
import Foot from './components/foot'

import 'boxicons'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <BannerDesc />
      <ReadBox />
      <Foot />
    </>
  )
}

export default App
