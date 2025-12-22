
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
    setTimeout(() => setCopied(false), 100);
  };


  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-50">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-nPink
                            drop-shadow-[0_0_12px_#f72585]">
            Francisco Lorenzo
          </span>
        </h1>

        <p className="mt-6 text-lg
                      text-sAqua
                      drop-shadow-[0_0_5px_#4cc9f0]">
          Desarrollador Front-End 
        </p>
        
        <div className="
        inline-flex items-center 
        gap-4 mb-3 mt-2 px-6 py-4 
        rounded-md bg-rPlum/10 backdrop-blur-md">
          <p className="text-sAqua font-bold">{email}</p>
            <button
              onClick={copyToClipboard}
              className="
              px-2 
              transition-transform 
              duration-200 
              rounded 
              hover:scale-110 active:scale-95
              cursor-pointer">
              <ContentCopyIcon sx={{ fontSize: 20, marginLeft: 1 }} />
            </button>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-4
              transition transition-duration-200 hover:scale-120 ">
              <SendIcon sx={{ fontSize: 20, marginLeft: 1 }} />
            </a>
        </div>

        <div>
          <a 
            href="https://wa.me/+542613891594" 
            target="_blank" 
            rel="noopener noreferrer"
            className="
            inline-flex items-center 
            m-4 
            drop-shadow-[0_0_10px_#25D366]
            transition transition-duration-200 hover:scale-120 ">
              <WhatsAppIcon sx={{ fontSize: 30, color: '#25D366' }} />
          </a>
          <a 
            href="https://www.linkedin.com/in/franciscolorenzoo/"
            target='_blank'
            className="
            inline-flex items-center 
            m-4 
            drop-shadow-[0_0_10px_#0A66C2]
            transition transition-duration-200 hover:scale-120 ">
              <LinkedInIcon sx={{ fontSize: 30, color: '#0A66C2' }} />
          </a>
          <a 
            href="https://github.com/franlorenzo1"
            target='_blank'
            className="
            inline-flex items-center 
            m-4 
            drop-shadow-[0_0_10px_#FFFFFF]
            transition transition-duration-200 hover:scale-120 ">
              <GitHubIcon sx={{ fontSize: 30, color: '#FFFFFF' }} />
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/Francisco Lorenzo 2026.pdf"
            download="Francisco Lorenzo 2026.pdf"
            className="
            px-6 py-3 rounded-lg 
            font-bold
            text-white
            hover:bg-nPink
            hover:text-white
            bg-rPlum
            transition duration-300
            hover:drop-shadow-[0_0_15px_#f72585]">
            Mi CV ⬇️
          </a>
        </div>
      </div>
    </section>
  );
}
