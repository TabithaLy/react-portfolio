import React from 'react';
import './utils/main.css';

function Footer() {
    return (
        <footer className='text-center'>
            <div>
                <a href="https://github.com/TabithaLy" >
                    <i className="fa-brands fa-github-square fa-2xl"></i>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/tabitha-spencer-salmon-1096a8132/" >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>
            </div>
            <div>
                <a href="mailto:spencersalmon.tabitha@gmail.com" >
                    <i className="fa-solid fa-envelope fa-2xl"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;