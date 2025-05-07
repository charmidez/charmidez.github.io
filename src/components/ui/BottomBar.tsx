export default function BottomBar() {
  return (
    <div className="fixed bottom-0 w-full flex justify-center z-50 lg:hidden">
      <div className="bg-violet-200 shadow-lg px-2 py-2 m-2 rounded-2xl">
        <div className="flex justify-between items-center gap-2">
          <a href="/" className="flex flex-col items-center hover:bg-violet-300 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/home.svg" alt="home" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Home</span>
          </a>

          <a href="/about" className="flex flex-col items-center hover:bg-violet-300 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/about.svg" alt="about" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">À propos</span>
          </a>

          <a href="/projects" className="flex flex-col items-center hover:bg-violet-300 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/work.svg" alt="projects" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">ProjectMine</span>
          </a>

          <a href="/contact" className="flex flex-col items-center hover:bg-violet-300 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/contact.svg" alt="contact" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}
