// import { div } from 'framer-motion/client';
import { SlArrowUp } from "react-icons/sl";
function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className='hidden w-full h-[9vh] p-5 lg:flex items-center justify-between gap-5 '>
            <h1 className='text-gray-400 text-sm'>Copyrights © 2025 by @Vikram | All rights Reserved.</h1>
            <h1 onClick={scrollToTop} className='scrollToTop text-gray-700 p-2 font-bold rounded-md cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out border border-gray-200 hover:bg-[#fae8ce]/10'> <SlArrowUp /> </h1>
        </div>
    )
}
export default Footer;
