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
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                    // characters="MARSH"
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            </div>
            <div
                className="relative z-10 flex items-center justify-center w-full h-full"
            
            >
                <div className="w-[800px] flex flex-col items-center" >
                    <h2 className="google-sans-flex-bold-round text-6xl -mb-5 drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]" >Welcome to</h2>
                    {/* <h2 className="google-sans-flex-bold-round text-6xl -mb-5 drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]" >Welcome to</h2> */}
                    <h2 className="google-sans-flex-bold-round text-8xl drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]" >Guy's website</h2>
                    <h2 className="google-sans-flex-bold-round text-4xl drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]" >Junior Full-Stack Software Developer</h2>
                    <Link to="/home" >
                        <GlassSurface 
                            className="absolute mt-10 cursor-pointer w-[600] self"
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