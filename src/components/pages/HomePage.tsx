import React from 'react';


function HomePage() {
    return(
        <>
        {/* class="row flex-lg-row-reverse align-items-center g-lg-5 py-5" */}
        <div className="p-4 rounded-lg my-30 flex flex-row items-center">
        <img src="/src/assets/PhotoMoi.png" alt="Lights" className="rounded-lg h-80 w-80"/>
        <div className="flex flex-col ml-8">
            <h1 className="text-6xl font-black text-violet-950">Charmidez ASSIOBO</h1>
            <h3 className="text-3xl font-bold text-violet-800">Web Developer</h3>
            <p className="text-xl mt-2 text-gray-700">I'm a passionate Web & Mobile Developer based in Lomé, Togo, specializing in modern technologies like Python, JavaScript, and Kotlin, along with their rich ecosystems and frameworks..</p>
        </div>
        <div>

        </div>
        </div>
        </>
    )
    
}

export default HomePage;