import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/HomePage/Banner/Banner'
import Players from './Components/HomePage/Players/Players'
import Navbar from './Components/Navbar/Navbar'

const fetchPlayers = async () => {
  const res = await fetch('/data.json')
  return res.json();
}


function App() {

  const [coin, setCoin] = useState(500000)

  const playersPromise = fetchPlayers()
  // console.log(playersPromise);

  return (
    <>

     <div className="container mx-auto">
        <Navbar coin={coin}></Navbar>
        <Banner></Banner>
        <Suspense fallback={<div className='w-1/12 mx-auto mt-20'><span className="h-20 w-20 loading loading-bars loading-xl" ></span></div>}>
          <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
        </Suspense>
     </div>


    </>
  )
}

export default App
