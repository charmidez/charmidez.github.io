export default function BottomBar() {
  return (
    <div className="flex flex-row justify-center items-center lg:hidden">
          <div className="fixed bottom-0 w-full md:w-fit flex justify-center z-50 lg:hidden">
      <div className="bg-transparent-bottom shadow-lg px-2 py-2 m-4 w-full rounded-2xl">
        <div className="flex justify-between items-center gap-2">
          <a href="/" className="flex flex-col items-center hover:bg-violet-400 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/home.svg" alt="home" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Acceuil</span>
          </a>

          <a href="/about" className="flex flex-col items-center hover:bg-violet-400 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/about.svg" alt="about" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">À propos</span>
          </a>

          <a href="/projectmine" className="flex flex-col items-center hover:bg-violet-400 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/work.svg" alt="projects" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Projects</span>
          </a>

          <a href="/contact" className="flex flex-col items-center hover:bg-violet-400 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/contact.svg" alt="contact" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Contact</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
