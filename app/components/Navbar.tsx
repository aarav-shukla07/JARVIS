export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#003300]/50 to-[#001133]/50 backdrop-blur-md text-black">
            <div className="flex items-center justify-between px-8 py-4">
                <div className="text-xl font-mono ">JARVIS</div>

                <nav className="hidden md:flex space-x-6 font-medium">
                    {['Works', 'About', 'Contact'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="hover:-translate-y-1 transition-transform duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <div className="relative group hidden md:block">
  <a
    href="#join"
    className="pl-[24px] pr-[22px] py-[8px] h-[44px] font-semibold inline-flex items-center justify-center relative
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
                 -translate-x-1/2 translate-y-2"
    />
  </a>
</div>




            </div>
        </header >
    );
}
