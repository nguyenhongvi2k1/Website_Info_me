import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style_pages.css"

class Detail_project extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    //   componentDidMount{ }
    render() {
        return (
            <>
                <Header />

                <Footer />
            </>
        )
    }
}
export default Detail_project;