import { Component } from "react";
import "./style_admin.css";
import SideBar from "./SideBar";
import {
  FaHome
} from "react-icons/fa";
class Admin_project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      // id_project: this.props.match.params.id_project,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/admin/select_project")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ projects: data }, () => {
          console.log(this.state.projects);
        });
      });
  }
  handleDelete() {

  }
  handleEdit() {
   
  }
  render() {
    const projectElement = this.state.projects?.map((project) => {
      return (
        <tbody>
          <tr>
            <td>{project.id_project}</td>
            <td style={{ width: "300px" }}>
              <img className="img_admin" src={project.image} />
            </td>
            <td>{project.title}</td>
            <td>
              <button
                type="submit"
                className="btn btn-primary start btn-click"
                onClick={() => this.handleEdit(project.id_project)}
              >
                <span>Edit</span>
              </button>

              <button
                type="submit"
                className="btn btn-warning cancel btn-click"
                onClick={() => this.handleDelete(project.id_project)}
              >
                <span>Deleted</span>
              </button>
            </td>
          </tr>
        </tbody>
      );
    });
    return (
      <div>
        <div className="Sidebar-container"  style={{ background: "pink" }}>
          <SideBar />
          <div className="wrapper">
            <div className="preloader flex-column justify-content-center align-items-center">
              <div className="project-section">
                <div className="project-strpied-tabled-with-hover project-card">
                  <div className="project-card-header">
                    <h1
                      className="project-card-title"
                      style={{ fontSize: "2rem" , color: "black",  fontWeight: 700}}
                    >
                      <FaHome
                        style={{ fontSize: "25px", marginRight: "20px", color: "black"}}
                      />
                      Project
                    </h1>
                  </div>
                  <div className="project-table-full-width project-table-responsive px-0 card-body">
                    <table className="project-table-hover project-table-striped project-table">
                      <thead>
                        <tr>
                          <th className="project-nav">ID</th>
                          <th className="project-nav">Image</th>
                          <th className="project-nav">Name</th>
                          <th className="project-nav">Content</th>
                          <th className="project-nav">Action</th>
                        </tr>
                      </thead>
                      {projectElement}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin_project;
