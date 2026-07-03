import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownloadIcon from '@mui/icons-material/Download';
import { useState, useEffect } from "react";

export default function Hero() {

  const email = "franciscopacolorenzo@gmail.com";
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-12 py-20">
      <div className="max-w-3xl w-full">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          <span className="text-nPink">
            Francisco Lorenzo
          </span>
        </h1>


        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-sAqua font-mono typewriter-frontend">
          Desarrollador Web Front-End
        </p>


        <div className="
        flex flex-col 
        sm:flex-row 
        items-center 
        justify-center 
        gap-3 sm:gap-4 
        mb-4 mt-4 px-4 py-3 
        rounded-md 
        bg-rPlum/10 backdrop-blur-md">
          <p className="text-sAqua font-bold text-sm sm:text-base break-all">{email}</p>
          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              className="px-2 transition-transform duration-200 rounded hover:scale-110 active:scale-95 cursor-pointer">
              <ContentCopyIcon sx={{ fontSize: 20 }} />
            </button>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgCbGcxcfNNGJKZzNCmdHSvpzXWqJdsRQksxnQQQCJSbstHBXdqbgjGGgDVwtRsVHqrqq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 transition-transform duration-200 hover:scale-110">
              <SendIcon sx={{ fontSize: 20 }} />
            </a>
          </div>
        </div>


        <div className="flex justify-center flex-wrap gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/franciscolorenzoo/"
            target='_blank'
            className="drop-shadow-[0_0_10px_#0A66C2] transition-transform duration-200 hover:scale-110">
            <LinkedInIcon sx={{ fontSize: 30, color: '#0A66C2' }} />
          </a>
          <a
            href="https://github.com/franlorenzo1"
            target='_blank'
            className="drop-shadow-[0_0_10px_#FFFFFF] transition-transform duration-200 hover:scale-110">
            <GitHubIcon sx={{ fontSize: 30, color: '#FFFFFF' }} />
          </a>
          <a
            href="https://wa.me/+542613891594"
            target="_blank"
            rel="noopener noreferrer"
            className="drop-shadow-[0_0_10px_#25D366] transition-transform duration-200 hover:scale-110">
            <WhatsAppIcon sx={{ fontSize: 30, color: '#25D366' }} />
          </a>
        </div>


        <div className="mt-8 flex justify-center">
          <div className="relative inline-block">
            <a
              href="/Francisco Lorenzo 2026.pdf"
              download="Francisco Lorenzo 2026.pdf"
              className="
              relative z-10 block
              px-6 py-3
              rounded-lg
              font-bold
              text-white bg-rPlum hover:bg-nPink
              transition duration-300 hover:drop-shadow-[0_0_15px_#f72585]
              flex items-center gap-2">
              Mi CV
              <DownloadIcon sx={{ fontSize: 20 }} />
            </a>

            <div
              className={`
                absolute top-full left-1/2 -translate-x-1/2 z-0
                flex flex-col items-center gap-0.5 pt-2
                text-sAqua font-mono text-xs tracking-widest
                transition-all duration-500 ease-out
                ${scrolled ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}>
              <span className="animate-bounce">scroll</span>
              <KeyboardArrowDownIcon className="animate-bounce" sx={{ fontSize: 18 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
