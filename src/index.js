import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header() {
    return (
        <header>
            <nav>
                <img src='./react-logo.png' width='40px' alt='React Logo' />
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 Thornforg development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));