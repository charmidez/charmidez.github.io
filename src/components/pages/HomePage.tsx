import React from 'react';
import ImageMine from '../ImageMine';


function HomePage() {
    return(
        <>
        {/* class="row flex-lg-row-reverse align-items-center g-lg-5 py-5" */}
        <div className="rounded-lg py-8 px-8 flex flex-col lg:flex-row items-center mt-22 m-8">
        {/* <img src="/src/assets/PhotoMoi.png" alt="Lights" className="rounded-lg max-h-80 max-w-80 min-h-40 min-w-40"/> */}
        <ImageMine src="/src/assets/PhotoMoi.png" alt="image" className="h-30 w-30"/>
        <div className="flex flex-col m-8">
            <h1 className="lg:text-6xl text-4xl font-black text-violet-950">Charmidez ASSIOBO</h1>
            <h3 className="lg:text-3xl text-2xl font-bold text-violet-800">Web Developer</h3>
            <p className="text-xl mt-2 text-gray-700">I'm a passionate Web & Mobile Developer based in Lomé, Togo, specializing in modern technologies like Python, JavaScript, and Kotlin, along with their rich ecosystems and frameworks..</p>
        </div>
        <div>

        </div>
        </div>
        </>
    )
    
}

export default HomePage;