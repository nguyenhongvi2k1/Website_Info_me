import { Component } from "react";
import "./styles.css"
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };

    }

    componentDidMount() {


    }


    render() {

        return (
            <header >
                <nav id="nav">
                    <ul className="nav justify-content-center ">
                        <h2 className="name">Developer</h2>
                        <a href='/'  className="nav-item"><li><p className="nav-link">Home</p></li> </a>
                        <a href='#'  className="nav-item"><li><p className="nav-link">Project</p></li></a>
                        <a href='#'  className="nav-item"><li><p className="nav-link">Hobbies</p></li></a>
                        <a href='#'  className="nav-item"><li><p className="nav-link">Contact me</p></li></a>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
