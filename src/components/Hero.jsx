import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export default function Hero() {

  const email = "franciscopacolorenzo@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-12 py-20">
      <div className="max-w-3xl w-full">
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          <span className="text-nPink drop-shadow-[0_0_12px_#f72585]">
            Francisco Lorenzo
          </span>
        </h1>

       
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-sAqua drop-shadow-[0_0_5px_#4cc9f0]">
          Desarrollador Front-End
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=franciscopacolorenzo@gmail.com"
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
          <a
            href="/Francisco Lorenzo 2026.pdf"
            download="Francisco Lorenzo 2026.pdf"
            className="
            px-6 py-3 
            rounded-lg 
            font-bold 
            text-white bg-rPlum hover:bg-nPink 
            transition duration-300 hover:drop-shadow-[0_0_15px_#f72585]">
            Mi CV ⬇️
          </a>
        </div>
      </div>
    </section>
  );
}
