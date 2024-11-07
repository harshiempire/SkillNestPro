import {hero01,hero02,hero03} from "../constants/images";
import { leftSideVariants,rightSideVariants } from "../constants/motion";
import {motion} from "framer-motion";
const Hero = () => {
    return <section id="home" className="flex items-center">
        <div className="container flex items-center justify-center">
            <div className="flex justify-between items-center flex-col-reverse lg:flex-row pt-[70px]lg:pt-0 gap-8">
              <motion.div 
              variants={leftSideVariants}
              initial="hidden"
              animate="visible"  className="flex flex-col gap-y-8 items-center lg:items-start text-center lg:text-center lg:text-start">
                <div className="flex flex-col gap-y-4">
                    <h2 className="section-title-before section-title-after text-h1 text-gray-10">Unlock Your Potential, Share Your Expertise With  Diverse Online Communities</h2>
                    <p className="text-base font-medium text-gray-60">Explore a world of Knowledge and skills at your fingertips</p>
                </div>
                <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
<button type="button" className="btn btn-outline">Get Started</button></a>
                </motion.div>  
                <motion.div
                 variants={rightSideVariants}
                 initial="hidden"
                 animate="visible" className="relative">
                    <div className="grid grid-cols-[minmax(70px,_230px)_minmax)70px,_250px)] grid-rows-[auto_auto] sm:grid-cols-[240px_270px] sm:grid-rows-[220px_220px] xl:grid-cols-[270px_300px]xl:grid-rows-[250px_250px] gap-4">
                        <img src={hero01} className=" rounded-4xl"/>
                        <img src={hero02} className="row-span-2 rounded-4xl"/>
                        <img src={hero03} className=" rounded-4xl"/>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>;
};

export default Hero;
