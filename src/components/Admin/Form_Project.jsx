import { Component } from "react";
import "./style_admin.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./SideBar";

class Form_Project extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    //   componentDidMount{ }
    render() {
        return (
            <>
                <div className="Sidebar-container">
                    <SideBar />
                    <div className="form_div">
                        <form className="container" style={{ left: '-12.5%',  marginTop:" 8%" }}>
                        <h1 className="title_admin">Project</h1>
                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label for="exampleInputEmail1">Name Project</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                                <small id="emailHelp" className="form-text text-muted">What is the name of the project you completed?</small>
                            </div>
                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label for="content">Content</label>
                                <textarea className="form-control" id="content" name="content" cols="60" rows="5">
                                </textarea>
                                <small id="emailHelp" className="form-text text-muted">What is the description of your completed project?</small>

                            </div>
                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label for="exampleFormControlFile1">Image Project</label><br/>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default Form_Project;