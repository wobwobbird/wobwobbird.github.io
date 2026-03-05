import LetterGlitch from "@/components/LetterGlitch";
import { Link } from "react-router-dom";
import PageHolder from "@/components/PageHolder";
import { Button } from "@/components/ui/button"
import { GrCodeSandbox } from "react-icons/gr";
import Cubes from '../components/Cubes';
import { useState } from "react";

const CubeHolder = () => (
    // <div className="h-[320px] w-[320px] mx-4 my-10 bg-[rgba(0,0,0,1)] rounded-2xl flex items-center justify-center shadow-[0_0_50px_15px_rgba(0,0,0,1)]">
    <div className="h-[320px] w-[320px] mx-4 bg-[rgba(0,0,0,0.6)] rounded-2xl flex items-center justify-center shadow-[0_0_50px_15px_rgba(0,0,0,0.6)]">
        <div className="h-[100%] w-[100%]">
            <Cubes
                gridSize={8}
                maxAngle={100}
                radius={4}
                borderStyle="2px dashed #61b3dc"
                faceColor="rgb(0, 0, 0)" 
                rippleColor="rgba(97, 220, 163, 0.3)"
                // rippleColor="#ff6b6b"
                rippleSpeed={1.5}
                // autoAnimate
                rippleOnClick
            />
        </div>
    </div>
);

const Entry = () => {
    const [tagLineRandomNumber, setTagLineRandomNumber] = useState(Math.floor(Math.random() * 3));
    const [oneLinerRandomNumber, setOneLinerRandomNumber] = useState(Math.floor(Math.random() * 3));

    const tagLine = [
        "Full-Stack Developer · React, Node & beyond",
        "Building apps from idea to deployment",
        "Full-Stack Developer · Problem solver & builder"
    ]

    const oneLiner = [
        "Portfolio · Projects · Contact",
        "See what I've been building",
        "Projects, experience & how to get in touch"
    ]

    return (
        <PageHolder 
            background={
                <LetterGlitch 
                    glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                    glitchSpeed={200}
                    centerVignette={false}
                    outerVignette={false}
                    smooth={true}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            } 
            className="items-center gap-4 !w-[600px]"
        >
            <h1 className="select-none w-full drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >Welcome to</h1>
            {/* max-xs:text-4xl! */}
            <h1 className="display select-none select-none drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >Guy's Website</h1>
            <h1 className="select-none drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >{tagLine[oneLinerRandomNumber]}</h1>
            
            <CubeHolder/>
            
            <h1 className="select-none drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]"
            >{oneLiner[tagLineRandomNumber]}</h1>
            <Button asChild variant="outline" className="px-10 has-[>svg]:px-10 rounded-xl [&_svg]:size-[1.2em]">
                <Link to="/home">
                    Enter <GrCodeSandbox data-icon="inline-end" />
                </Link>
            </Button>
        </PageHolder>
    )
}

export default Entry;