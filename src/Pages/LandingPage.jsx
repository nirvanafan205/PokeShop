import React from "react";
import logo from '../Imgs/pokeLogo.jpg'

const LandingPage = () => {
    return(
                <div className="flex flex-row bg-blue-300 h-18 p-4">
                    <div className="basis-full text-left"><img className="rounded-full h-16 w-18" src={logo} alt="pokeLogo"/></div>
                    <div className="basis-full text-center text-purple-500 font-body text-5xl">Royalty Poke Shop</div>
                    <div className="basis-full text-right"> login button</div>
                </div>
    );
}

export default LandingPage;
