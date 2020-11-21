const { Component } = require("react");

class Header extends Component {
    render () {
        return (
            <div className="mb-4">
                <nav className="navbar navbar-fixed-top bg-danger navbar-expand-sm">
                    <div className="nav-item nav-link text-light">
                        <h3>Beer Brands</h3>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;