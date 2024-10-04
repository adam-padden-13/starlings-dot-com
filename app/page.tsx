export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-[family-name:var(--font-geist-mono)] text-5xl">
          Starlings
        </h1>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://starlings-detroit.bandcamp.com/track/try-hard-town"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen Here
          </a>
        </div>
        <div className="carousel rounded-box">
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
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
