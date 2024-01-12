// Cite resource for blur-filter effect around card: https://www.youtube.com/watch?v=5W6kEP65AH4
//Cite resource for filter b/w and hover color: https://flowbite.com/docs/typography/images/#:~:text=Set%20the%20size%20of%20the,and%20height%20of%20the%20element.
//Cite gird layout help: ChatGBT
import { Link } from "react-router-dom"

export default function Card({ imageData, updateDetails }) {
    return (
    <div className="grid gap-0 items-start justify-center">
        <div className="relative">
            <div className="rounded-s"></div>
            <Link to="/details" onClick={() => { updateDetails(imageData) }}>
                <figure className="w-[30vw] relative cursor-pointer hover:grayscale hover:transform hover:scale-105 shadow-lg transition ease duration-500 overflow-hidden">
                    <div className="w-full aspect-w-4 aspect-h-5 overflow-hidden">
                        <img className="object-cover rounded m-auto" src={imageData.images.original.url} alt={imageData.title} />
                    </div>        
                    <h2 className="bottom-6 left-0 right-0 text-white font-bold z-10 text-center">{imageData.title}</h2>
                </figure>
            </Link>
        </div>
    </div>
  )
}