import { Component } from "react";
import "./style_admin.css";
import SideBar from "./SideBar";
import {
    FaQuestion
} from "react-icons/fa";
class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id_question: this.props.match.params.id_question,
    };
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/admin/help")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data }, () => {
          console.log(this.state.users);
        });
      });
  }
  handleDelete(id_question) {
    console.log(id_question);
    fetch(`http://localhost:8000/admin/help/${id_question}`, {
      method: "DELETE",
      //headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id_question),
    })
      .then((res) => res.json())
      .then((data) => this.setState({ id_question: data }));
    window.location.href = "/admin-dashboard";
  }
//   handleEdit(id_question) {
//     console.log(id_question);
//     fetch(`http://localhost:8000/admin/show/addproject/${id_question}`, {
//       method: "PUT",
//       //headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(id_question),
//     })
//       .then((res) => res.json())
//       .then((data) => this.setState({ id_question: data }));
//     window.location.href = "/admin-dashboard";
//   }
  render() {
    const projectElement = this.state.users?.map((user) => {
      return (
        <tbody>
          <tr>
            <td>{user.id_question}</td>
            <td>{user.name_help}</td>
            <td>{user.email_help}</td>
            <td>{user.sdt}</td>
            <td>{user.text_help}</td>
            <td>{user.answer}</td>
            <td>
              <button
                type="submit"
                className="btn btn-primary start btn-click"
                onClick={() => this.handleEdit(user.id_question)}
              >
                <span>Edit</span>
              </button>

              <button
                type="submit"
                className="btn btn-warning cancel btn-click"
                onClick={() => this.handleDelete(user.id_question)}
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
                      <FaQuestion
                        style={{ fontSize: "25px", marginRight: "8px", marginTop: "-5px" , color: "black"}}
                      />
                      HELP
                    </h1>
                  </div>
                  <div className="project-table-full-width project-table-responsive px-0 card-body">
                    <table className="project-table-hover project-table-striped project-table">
                      <thead>
                        <tr>
                          <th className="project-nav">ID</th>
                          <th className="project-nav">Name</th>
                          <th className="project-nav">Email</th>
                          <th className="project-nav">SĐT</th>
                          <th className="project-nav">Text Question</th>
                          <th className="project-nav">Text Answer</th>
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

export default Help;
