import { useState } from "react"
import Gallery from '../Gallery'

export default function SearchPage(props) {
    // Store search term and API data here
    const [query, setQuery] = useState('')
    const [queryResults, setQueryResults] = useState([])

    // Define an async function to query the API & JSONify the response
    async function getData(url, buttonName) {
        const res = await fetch(url)
        const { data } = await res.json() // destructure the JSON response
        console.log(data)
        // Determine if a new search is being made, if so, clear the previous data
        if (buttonName === 'Next') {
            setQueryResults([...queryResults, ...data])
        } else {
            setQueryResults(data)
        }
    }

    function handleQuerySubmit(event) {
        // prevent the page reloading
        event.preventDefault()
        // send a request to the API with the query string 
        console.log(event.target.innerText)
        getData(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_KEY}&limit=20&q=${query}`, event.target.innerText)
    }

    return (
        <div className="search-page p-10">
            <form onSubmit={handleQuerySubmit} className="mt-4 text-center">
                <label htmlFor="search" className="font-medium">
                </label>
                <br /><br />
                <div className="flex items-center"> 
                <input
                    className="max-w-4xl mx-auto p-2 w-[90vw] rounded border border-gray-300 focus:outline-none focus:border-purple-500"
                    name="search"
                    placeholder="search..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button
                    type="submit"
                    className="max-w-7xl px-4 py-2 ml-1 py-2 text-gray-300 hover:text-white hover:bg-pink-700 bg-pink-500 rounded transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                </div>
            </form>

            <Gallery
                images={queryResults}
                refreshQueue={getData}
                url={`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_KEY}&limit=10&&q=${query}&offset=${queryResults.length}`}
                updateDetails={props.setDetailsData}
            />
        <br /><br />
        </div>
    )
}