import React from 'react'

const SplittingCompo = () => {
    return (
        <div>
            <h1>SplittingCompo</h1>
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}
const Header = () => {
    return <h1>My App Header</h1>;
};
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Navbar -Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};
const Content = () => {
    return (
        <div>
            <h2>Content Title</h2>
        </div>
    );
};
const Footer = () => {
    return <p>
        <h1>Footer</h1>
        <input />
    </p>;
};
export default SplittingCompo;