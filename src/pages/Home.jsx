import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    //   componentDidMount{ }
render() {
    return (
        <>
        <Header/>
        <div>
            XIn chao
        </div>
        <Footer/>
        </>
    )
}
}
export default Home;