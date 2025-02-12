import {motion} from "framer-motion";
import { centerVariants } from "../constants/motion";
const CTA = () => {
    return( <div className="py-[70px]">
        <motion.div
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{margin:"0px 0px -200px 0px",once:true}}
        
        className="container h-[400px]">
            <div className="flex flex-col justify-center items-center gap-y-8 w-full h-full px-4 bg-[url('/src/assets/cta-bg.png')] border border-solid border-gray-10 rounded-4xl">
                <h2 className="relative section-title-after text-h2 text-center text-gray-10"> Join Our Learning <br/> Community</h2>
                <form className="w-full max-w-[550px]">
                    <div className="flex items-center border border-solid border-gray-10 rounded-full h-14 p-1.5 overflow-hidden">
                        <input type="text" name="email" id="email" className="outline-0 bg-transparent px-4 w-full text-base placeholder:text-gray-40"
                        placeholder="Enter Your Email" autoComplete="off" />
                        <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
                 <button type="submit" className="flex items-center justify-center flex-shrink-0 border border-solid border-gray-10 w-11 h-11 rounded-full">
                 <svg width="31" height="51" viewBox="0 0 71 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.612732 25.4016H64.4928M38.4571 1.9472C43.2016 10.3343 51.0356 19.7372 64.4928 25.4472C51.0356 31.1572 43.2016 40.5601 38.4571 48.9472" stroke="#292C32" strokeWidth="4.5" />
</svg>
                 </button></a>
                    </div>
                </form>
            </div>
        </motion.div>
    </div>
    );
};

export default CTA;
