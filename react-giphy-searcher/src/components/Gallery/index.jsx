import { useState, useEffect } from 'react'
import Card from '../Card'
import './styles.css'

export default function Gallery({ images, refreshQueue, url, updateDetails }) {
 // Keep track of what gallery page the user is viewing
 const [currentPage, setCurrentPage] = useState(1)

 // Event handler for the next Page Button
 function getNextPage(event) {
     refreshQueue(url, event.target.innerText)
     setCurrentPage(currentPage + 1);
 }

 // Event handler for the Previous Page button
 function getPrevPage() {
     setCurrentPage(currentPage - 1)
 }

 // The default value of gallery content. What we see before the app finsihes querying the API
 let galleryContent = <p className='text-white'>Your gif's are loading...</p>

 // Conditionally update the gallery content depending on the current page
 if (images.length > 0 && currentPage > 1) {
     const nextPage = currentPage + 1
     galleryContent = images
         .slice(currentPage * 10, nextPage * 10) // get the 10 images of the array we want to see
         .map((image, i) => <Card key={i} imageData={image} updateDetails={updateDetails} />) // map over the 10 images and render them in Card components
 } else if (images.length > 0 && currentPage === 1) {
     galleryContent = images
         .slice(0, 10) // get the first 10 images when on the first page
         .map((image, i) => <Card key={i} imageData={image} updateDetails={updateDetails} />)
 }
 
 return (
     <>
         <div className="flex flex-wrap justify-around p-10">
             {galleryContent}
         </div>

         <div className='py-16 px-20 flex justify-between'>
             <button className="text-white items-center p-1 px-3 rounded bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:from-green-400 to-blue-500" onClick={getPrevPage}>Previous</button>
             <button className="text-white items-center p-1 px-6 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" onClick={getNextPage}>Next</button>
         </div>
     </>
 )
}