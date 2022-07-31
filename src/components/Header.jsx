import { Component } from "react";
import "./styles.css"
import Package from "./Package";
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            hobbies: [],
            selectedProject: -1,
            selectedHobbies: -1,
            clickOpen: false,
            Dropdown: false
        }
        this.handleSelectProject = this.handleSelectProject.bind(this)

        // this.handleSelectHobbies = this.handleSelectHobbies.bind(this)

    }

    componentDidMount() {


    }
    handleSelectProject(e) {
        this.setState(e => ({
            clickOpen: false
        }));
    }
    // handleSelectHobbies(e) {
    //     const hobbies_id = e.target.value;

    // }
    render() {
        const projectComponent = this.state.projects.map(project => (
            <option value={project.id_project}>{project.name}</option>

        ))
        const onMouseEnter = () => {
            if (window.innerWidth < 960) {
                this.setState(e => ({
                    Dropdown: false
                }));
            } else {
                this.setState(e => ({
                    Dropdown: true
                }));
            }
        };

        const onMouseLeave = () => {
            if (window.innerWidth < 960) {
                this.setState(e => ({
                    Dropdown: false
                }));
            } else {
                this.setState(e => ({
                    Dropdown: false
                }));
            }
        };
        return (
            <header id="header">
                <nav id="nav">
                    <ul className="nav justify-content-center ">
                        <h2 className="name">Developer</h2>
                        <li className="nav-item">
                            <Link to='/'
                                className="nav-link"

                            >Home
                            </Link>
                        </li>

                        <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                            <Link to='/project'
                                className="nav-link"
                                onClick={this.handleSelectProject}
                            >Project
                                <i className="fas fa-caret-down" style={{ marginLeft: '8px' }} />
                            </Link>
                            {this.state.Dropdown && Package}
                        </li>

                        <li className="nav-item">
                            <Link to='/hobbies'
                                className="nav-link"
                            >Hobbies
                                <i className="fas fa-caret-down" style={{ marginLeft: '8px' }} />

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact_me'
                                className="nav-link"
                            >Contact me
                            </Link>
                        </li>
                      
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
