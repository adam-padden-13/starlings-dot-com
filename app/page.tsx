"use client";
export default function Home() {

  const handleCopy = () => {
    const url = "contact@starlingsdetroit.com";
    navigator.clipboard.writeText(url).then(() => {
      alert("Email address has been copied to clipboard!");
    });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <header className=" mt-14  ">
        <div className="items-center justify-center">
          <img src="./starlings-logo.png" alt="Starlings Logo" />
        </div>
      </header>
      <main className="flex flex-col row-start-2 items-center ">
        <div className="flex gap-4 items-center  sm:flex-row mt-24">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://tr.ee/PvzvgXxp9U"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.instagram.com/starlings_detroit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow
          </a>
          <button
            onClick={() => handleCopy()}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Contact
          </button>
        </div>
        <div className="carousel rounded-box pt-10">
          <div className="w-full">
            <img src="./adam-2.jpg" alt="Singer" />
          </div>
          <div className="w-full">
            <img src="./nick-2.jpg" alt="Guitar Player" />
          </div>
          <div className="w-full">
            <img src="./darren.jpg" alt="Drummer" />
          </div>
        </div>
        <div className="carousel rounded-box pt-10">
          <div className="w-full">
            <img src="./nick.jpg" alt="Singer" />
          </div>
          <div className="w-full">
            <img src="./adam.jpg" alt="Guitar Player" />
          </div>
          <div className="w-full">
            <img src="./donny.jpg" alt="Drummer" />
          </div>
        </div>
        <div className="flex justify-center items-center"></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
