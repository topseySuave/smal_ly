import React from "react";

const Header = () => (
    <div className="container mx-auto py-8">
        <div className="flex justify-between">
            <a target="_blank" href="https://github.com/topseySuave/smal_ly" className="text-blue">Contribute on Github</a>
            <button class="w-auto px-10 h-8 bg-grey rounded-full text-white">
                Donate
            </button>
        </div>
    </div>
);

const Hero = () => (
    <div className="container mx-auto py-8">
        <div className="flex flex-col items-center">
            <h1 className="text-black text-6xl title-logo">Smal.ly</h1>
            <h1 className="text-grey">URL shortener</h1>
        </div>
    </div>
);

const InputSection = () => (
    <div className="container mx-auto py-8">
        <div className="flex items-center flex-col mx-auto max-w-2xl">
            {/* <input className="py-2 px-20 rounded-md border-gray-500" type="text" placeholder="Enter URL to shorten" /> */}
            <input
                className="appearance-none block w-full bg-white text-gray-700 border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter url to shorten"
            />

            <div className="w-full rounded bg-white overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Your link is ready</div>
                    <a href="http://localhost:5000/aiheucia" className="text-blue text-base">
                        http://localhost:5000/aiheucia
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <InputSection />
        </div>
    );
};

export default App;