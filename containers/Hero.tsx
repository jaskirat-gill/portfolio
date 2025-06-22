import HeroCanvas from "@/components/HeroCanvas";
import HeroContent from "@/components/HeroContent";

const Hero = () => {
    return (
       <div className="w-screen h-screen" id="home">
            <HeroCanvas />
            <HeroContent />
       </div>
    )

}
export default Hero;