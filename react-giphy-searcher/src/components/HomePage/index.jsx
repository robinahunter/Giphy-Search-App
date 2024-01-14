import Gallery from '../Gallery'

export default function HomePage(props) {
    return (
        <>
            <br />
            <h1 className='font-bold text-white'>BROWSE GIPHY's!</h1>
            <br />
            <h1>
                <img className="lh-0.5 mx-auto animate-bounce w-7 h-7 text-pink-600" src="/react-giphy-searcher/src/assets/arrow-downWHT.svg" />
            </h1>
            <Gallery
                images={props.images}
                refreshQueue={props.getData}
                updateDetails={props.setDetailsData}
                url={`https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_KEY}&limit=20&offset=${props.images.length}`}
            />
        </>
    )
}