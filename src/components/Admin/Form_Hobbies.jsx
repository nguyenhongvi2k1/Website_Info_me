import { Component } from "react";
import "./style_admin.css"
import SideBar from "./SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';

class Form_Hobbies extends Component {
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
                        <form className="container" style={{ left: '-12.5%' }}>
                        <h1 className="title_admin">Hobbies</h1>
                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label for="exampleInputEmail1">Name Hobbies</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                            </div>
                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label for="content">Content</label>
                                <textarea className="form-control" id="content" name="content" cols="60" rows="5">
                                </textarea>

                            </div>
                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label for="exampleFormControlFile1">Image Hobbies  </label> <br/>
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
export default Form_Hobbies;