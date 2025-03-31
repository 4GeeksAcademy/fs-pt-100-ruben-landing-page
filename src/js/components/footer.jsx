import React from "react";


export const Footer = () => {

    return (
        <div className="bg-black p-5 text-center text-white">
            <div className="conteiner">
                <p>Copyright &copy; Your Website {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}