import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); 
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .loader {
          background-color: rgb(0, 0, 0);
          top: 0%;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          transition: opacity 1s ease-in-out;
          z-index: 1001;
          opacity: 1;
        }

        .loader.fade-out {
          animation: fadeOut 1s ease-in-out 4s forwards;
        }

        .loader h1 {
          z-index: 10000;
          font-size: 8vw;
          color: rgb(255, 255, 255);
          position: absolute;
          opacity: 0;
          animation-name: lulu;
          animation-timing-function: linear;
          animation-duration: 1s;
          animation-delay: 1s;
          animation-fill-mode: forwards;
        }

        .loader h1:nth-child(2) {
          animation-delay: 2s;
        }

        .loader h1:nth-child(3) {
          animation-duration: 1.2s;
          animation-delay: 3s;
        }

        @keyframes lulu {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>

      <div className="loader fade-out">
        <h1>Vision</h1>
        <h1>Innovation</h1>
        <h1>Collaboration</h1>
      </div>
    </>
  );
};

export default Loader;