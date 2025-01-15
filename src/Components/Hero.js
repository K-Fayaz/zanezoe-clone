
import weddingRing from "../assets/download.png";


const Hero = ()=>{
    return(
        <main className="w-[95%] relative overflow-visible overflow-y-auto">
            <div className="font-main">
                <h1 className="text-white text-[500px] font-thin leading-none">ZANE &</h1>
                <h1 className="text-white text-[500px] font-thin text-right leading-none">ZOE</h1>
            </div>
            
            {/* Image Asset */}
            <div style={{transform:'translate(-400px,-300px)'}} className="absolute top-0 left-0">
                <img alt="wedding-ring" src={weddingRing} />
            </div>

        </main>
    )
}

export default Hero;