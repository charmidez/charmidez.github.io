import React from "react";

function HomePage() {
  return (
    <>
      {/* class="row flex-lg-row-reverse align-items-center g-lg-5 py-5" */}
      <div
        className="rounded-lg py-8 px-8 flex flex-col lg:flex-row items-center pt-22 p-8 bg-[url('/src/assets/pattern.png')]"
      >
        <img
          src="/src/assets/setup2.jpg"
          alt="Lights"
          className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
        />
        <div className="flex flex-col m-8">
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
        </div>
      </div>
    </>
  );
}

export default HomePage;
