import { Link } from "react-router-dom"; 
import "./styles.css"

export default function DetailsPage(props) {
    console.log(props)
    return (
        <div className="flex">
            <div className="col mx-auto">
                <div className="group">
                    <img src={props.images.original.url} className="w-[75vw] rounded" />
                </div>
                    <br />
                    <div className="mt-4 text-center text-white">
                        <p className="text-center text-white">
                            <span className="text-xl">{props.title}</span>
                        </p>
                        <p className="text-center text-white">
                            <span className="text-xl text-white">Rating: {props.rating}</span>
                        </p>
                    </div>
                    <div >
                    <div className="mt-4 text-center">
                        <button type="button" className="relative mx-auto items-center p-1 px-3 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                            <Link className="mx-auto text-white" to="/">HOME</Link>
                        </button>  
                    </div>      
                </div>
            </div>
        </div>
    )
}