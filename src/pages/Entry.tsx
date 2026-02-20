import LetterGlitch from "@/components/LetterGlitch";
import GlassSurface from '../components/GlassSurface';
import { Link } from "react-router-dom";


const Entry = () => {

    return (
        <div className="fixed inset-0 w-full h-full">
            <div className="absolute inset-0" >
                <LetterGlitch 
                    glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                    glitchSpeed={100}
                    centerVignette={false}
                    outerVignette={true}
                    smooth={true}
                    // characters="MARSH"
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            </div>
            <div
                className="relative z-10 flex flex-col items-center justify-center w-full h-full"
            
            >
                <div>
                    <h2 className="google-sans-flex-bold-round text-6xl -mb-5" >Welcome to</h2>
                    <h2 className="google-sans-flex-bold-round text-8xl" >Guy's website</h2>
                    {/* <h2 className="google-sans-flex-skinny text-5xl pt-0" >I don't bite</h2> */}
                    <h4></h4>
                    <Link to="/home" >
                        <GlassSurface 
                            className="absolute mt-20 cursor-pointer"
                            width={700}
                            height={70}
                            borderRadius={30}
                            displace={0.01}
                            distortionScale={0}
                            redOffset={0}
                            greenOffset={-50}
                            blueOffset={20}
                            brightness={50}
                            opacity={0}
                            borderWidth={0.2}
                            backgroundOpacity={0.4}
                            saturation={0.9}
                            mixBlendMode="screen"

                        >
                            <p
                                className="google-sans-flex-contact text-5xl"
                            >Enter</p>
                        </GlassSurface>
                    </Link>


                    <div>
                        <div className="h-auto relative" >
                            {/* <GlassIcons items={items} className="custom-class" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="w-full min-h-screen pt-24">
        // </div>
    )
}

export default Entry;