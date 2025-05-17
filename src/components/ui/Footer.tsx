

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm lg:py-6 pt-6 pb-32 px-4 text-center flex flex-col gap-4 lg:gap-8">
      <div>
        <ul className="lg:flex lg:flex-row lg:gap-8 justify-center hidden font-bold text-violet-400">
          <li>A Propos</li>
          <li>Mes Projects</li>
          <li>L'actualité</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="max-w-screen-md mx-auto space-y-4">

        <p className="text-xs font-bold text-gray-400">
        Par <a
            href="https://www.linkedin.com/in/charmidez-k-h-assiobo-95677a1b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-50 transition"
          >
            Charmidez ASSIOBO
          </a>  © {new Date().getFullYear()} Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
