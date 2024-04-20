function Nav() {
    const style = {
        background: "gray",
    }

    return (
        <nav className="main-nav" style={style}>
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;