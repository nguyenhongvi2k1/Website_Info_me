import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style_pages.css"

class Project extends Component {
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
                <div id="cover">
                    <div class="pw relative">
                        <div class="header" id="js-nav-header">
                            <div class="logo w">
                                <a href="https://base.vn/wework" class="__ap_processed active">Name</a>
                            </div>

                        </div>
                        <div class="content">
                            <div class="text">
                                <h1>Giải pháp quản lý công việc &amp; dự án toàn diện cho doanh nghiệp</h1>
                                <h2>Nền tảng đầu tiên tại Việt Nam ứng dụng tinh hoa của các mô hình quản lý nổi tiếng trên thế giới để giải quyết bài toán điều hành công việc và dự án của doanh nghiệp</h2>
                                <div class="ctas">
                                    <div class="cta js-signup-cta -color url" data-url=":signup/-/wework" data-app="wework">Link git</div>
                                    <div class="more">Xem demo qua youtube</div>
                                </div>
                            </div>
                        </div>
                        <div class="showcase-image"><img src="https://static-gcdn.basecdn.net/landing/base.vn/image/wework/visual.wework.svg"/></div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default Project;