import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import SearchPage from '../SearchPage'
import DetailsPage from '../DetailsPage'
import NotFoundPage from '../NotFoundPage'
import lightingBolt1 from '../../assets/lightingBolt1.svg'
import poweredByGiphy from '../../assets/Poweredby_100px-Black_VertLogo.png';


function App() {
  // Store API data here
  const [images, setImages] = useState([])
  const [detailsData, setDetailsData] = useState({})

    // Define an async function to JSONify the query response  
    async function getData(url) {
      const res = await fetch(url)
      const { data } = await res.json() // destructure the JSON response
      setImages(images.concat(data))
  
    }

  // Query the API on component mount, and get 20 giphy.
  useEffect(() => {
      getData(`https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_KEY}&limit=20`)
    }, [])

//  Create the HTML using JSX for the App component
return (
  <>
    {/* The Nav Bar */}
    <nav className="p-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <ul className="flex justify-end">
                <li>
                  <img className="lh-1 mx-auto h-12" src={lightingBolt1} alt="Lighting Bolt" />
                </li>
                <li>
                  <h2 className="px-2 flex animate-pulse text-white font-bold logo text-3xl">UR GIPHY</h2>
                </li>
              </ul>
            </Link>
          </div>
          <div className="flex-grow">
              <ul className="flex justify-end text-white bg-gradient-to-r from-pink-500 to-yellow-500 text-lg font-medium">
                <li className='nav'>
                  <Link to="/">
                    <p className="border-r-4 border-black p-2 hover:text-pink-200">Home</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-grow">
              <ul className="flex justify-end text-white bg-gradient-to-r from-yellow-500 to-emerald-500 to-sky-500 text-lg font-medium">
                <li>
                  <Link to="/about">
                    <p className="border-r-4 border-black p-2 hover:text-pink-200">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          <div className="flex-grow">
              <ul className="flex justify-end text-white bg-gradient-to-r from-sky-500 to-purple-500 to-purple-700 text-lg font-medium">
                <li>
                  <Link to="/search">
                    <p className="border-r-4 border-black p-2 hover:text-pink-200">Search</p>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </nav>
    {/* Routes */}
    <Routes>
      <Route path="/" element={
        <HomePage
          images={images}
          getData={getData}
          setDetailsData={setDetailsData}
        />}
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/search" element={<SearchPage setDetailsData={setDetailsData} />} />
      <Route path="/details" element={<DetailsPage {...detailsData} />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    <div>
      <img className="ml-5 mb-5 w-15 text-pink-600" src={poweredByGiphy} alt="Powered by Giphy" />
    </div>
    </>
  )
}

export default App;
