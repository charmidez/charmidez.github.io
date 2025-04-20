import ImageMine from "../objects/ImageMine";
import SectionMine from "../objects/SectionMine";

function HomePage() {
  return (
    <>
      {/* class="row flex-lg-row-reverse align-items-center g-lg-5 py-5" */}
      <SectionMine
        idSectionMine="home"
        className="rounded-lg py-8 px-4 mt-16 sm:px-6 lg:px-32 flex flex-col lg:flex-row items-center bg-[url('/assets/pattern.png')] scroll-mt-16"
      >
        {/*
                <img
                  src="/src/assets/profil.png"
                  alt="Lights"
                  className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
                />
        */}

        <ImageMine
          src="/assets/PhotoMoi.png"
          alt="Lights"
          className="rounded-lg w-full h-full sm:w-80 sm:h-80 lg:w-full lg:h-full object-cover"
        />
        <div className="flex flex-col mt-2 md:ml-4 lg:ml-8">
          <h1 className="lg:text-6xl text-4xl font-black text-violet-950">
            Charmidez ASSIOBO
          </h1>
          <h3 className="lg:text-3xl text-2xl font-bold text-violet-800">
            Web Developer
          </h3>
          <p className="text-xl mt-2 text-gray-700">
            I'm a passionate Web & Mobile Developer based in Lomé, Togo,
            specializing in modern technologies like Python, JavaScript, and
            Kotlin, along with their rich ecosystems and frameworks..
          </p>
          <div className="flex flex-row lg:flex-row justify-start">
            <a href="https://github.com/charmidez"
              target="_blank"
              rel="noopener noreferrer" className="mt-4 text-blue-500 hover:underline">
              <img
                src="/assets/github.png"
                alt="github"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/charmidez-k-h-assiobo-95677a1b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline"
            >
              <img
                src="/assets/linkedin.png"
                alt="linkedIn"
                className="h-10 w-10"
              />
            </a>
          </div>
        </div>
      </SectionMine>
    </>
  );
}

export default HomePage;
