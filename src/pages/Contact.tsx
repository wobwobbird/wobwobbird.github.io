import Balatro from "@/components/Balatro";
import { GridScan } from "@/components/GridScan";

const Contact = () => {
    return (
        <div className="fixed inset-0 w-full h-full">
            {/* <Balatro mouseInteraction={false} spinRotation={-1.0} spinSpeed={3.0} /> */}
            <GridScan 
                sensitivity={0.1}
                lineThickness={1}
                linesColor="rgba(44, 81, 36, 0.87);"
                gridScale={0.1}
                scanColor="rgba(3, 196, 51, 0.87);"
                scanOpacity={0.4}
                enablePost
                bloomIntensity={0.6}
                chromaticAberration={0.002}
                noiseIntensity={0.01}
            />
        </div>
        // <div className="w-full min-h-screen pt-24">
        // </div>
    )
}

export default Contact;


// spinRotation = -2.0,
// spinSpeed = 7.0,
