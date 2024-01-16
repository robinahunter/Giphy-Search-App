import arrowDownWHT from '../../assets/arrow-downWHT.svg';

export default function AboutPage() {
    return (
        <>
            <br />
            <h1 className='font-bold text-white'>About Gif's</h1>
            <br />
            <h1>
                <img className="lh-0.5 mx-auto animate-bounce w-7 h-7 text-pink-600" src={arrowDownWHT} alt="Arrow" />
            </h1>
            <br />
            <h2 className="text-white mx-auto w-[75vw] text-3xl font-bold">The GIF is over 30 years old! <br /> It didn't just shape the internet — it grew up with the internet.</h2>
            <br />
            <h5 className="text-white mx-auto font-medium w-[75vw]">    The GIF is officially 30-something, and in the prime of its internet life.

            Three decades ago, on June 15, 1987, the most beloved image file extension on the internet was birthed by a team of CompuServe developers seeking a way to compress images with minimal data loss. The solution: the GIF, a simple, flexible file format for lower-resolution pictures.

            My, how far we’ve come since those inauspicious beginnings. These days, the GIF is so ubiquitous as a piece of internet culture that it’s got its own offshoot formats like reaction GIFs, GIF art, and Tumblr GIF sets. The question of how to pronounce the word “GIF” has become a rote topic of cultural debate. (The man who invented the GIF, Steve Wilhite, says it with a soft ‘G,’ like Jif peanut butter, but most people on the internet say it with a hard ‘G,’ because a) it’s more fun, b) it avoids confusion with said brand of peanut butter, and c) come on, it’s Graphical Interchange Format, not Giraffe-ical Interchange Format.)...
            </h5>
            <br />
            <p className="text-white mx-auto font-light w-[75vw]">By Aja Romano | @ajaromano | Read the full artical at <a href="https://www.vox.com/culture/2017/6/15/15802136/gif-turns-30-evolution-internet-history"><span className="text-pink-300 hover:text-teal-200">Vox.com</span></a></p>
            <br /><br /><br />

        </>
    )
}