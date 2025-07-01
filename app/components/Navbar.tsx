import { jetbrainsMono, poppins } from "@/lib/fonts";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#003300]/50 to-[#001133]/50 backdrop-blur-md text-black">
            <div className="flex items-center justify-between pl-[100px] pr-[100px]">
                <div className="text-[18px] md:text-[18px] display font-normal text-lg leading-[1.2] max-w-[40px] py-[21px] transition-all duration-300 hover:-translate-y-1.5">
                    <span className={`${jetbrainsMono.className}`} style={{ letterSpacing: "-0.02em"}}><a href="/">JARVIS</a></span>
                </div>


                <nav className="{`${poppins.className}`} hidden md:flex space-x-[40px] font-medium py-[18px] pl-[45px]">
                    {['Works', 'About', 'Contact'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="hover:-translate-y-1.5 transition-transform duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <div className="relative group hidden md:block py-[10px]">
                    <a
                        href="#join"
                        className="pl-[24px] pr-[22px] py-[8px] h-[44px] font-normal inline-flex items-center justify-center relative
               text-black bg-transparent rounded-full 
               transition-[background,color,transform] duration-500 ease-in-out
               group-hover:bg-white group-hover:text-black
               [transition-property:background,color,transform,border-radius] [transition-duration:60ms] group-hover:rounded-md"
                    >
                        <span className="relative flex items-center gap-[2px]">
                            {/* Text slides slightly LEFT on hover */}
                            <span
                                className="transition-transform duration-500 ease-in-out group-hover:-translate-x-1"
                            >
                                Join Us
                            </span>

                            {/* Arrow slides slightly RIGHT on hover */}
                            <span
                                className="ml-[1px] transition-all duration-500 ease-in-out 
                   group-hover:translate-x-1 group-hover:opacity-100 opacity-0"
                            >
                                🡢
                            </span>
                        </span>

                        {/* Blob under the button */}
                        <span
                            className="absolute bottom-0 left-1/2 w-3 h-3 bg-black rounded-full blur-sm 
                 opacity-0 scale-0 transition-all duration-700 ease-in-out 
                 group-hover:opacity-100 group-hover:scale-100 
                 -translate-x-1/2 translate-y-2 w-[98px]"
                        />
                    </a>
                </div>




            </div>
        </header >
    );
}
