import React from 'react';

const Header = () => (
    <div className="container mx-auto py-8">
        <div className="flex justify-between">
            <a target="_blank" href="https://github.com/topseySuave/smal_ly" className="text-blue">Contribute on Github</a>
            <button className="w-auto px-10 h-8 bg-grey rounded-full text-white">
                Donate
            </button>
        </div>
    </div>
);

export default Header;