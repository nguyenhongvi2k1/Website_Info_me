import { click } from "@testing-library/user-event/dist/click";
import { Component } from "react";
import "./styles.css"

class Package extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            hobbies: [],
            selectedProject: -1,
            selectedHobbies: -1,
            click: false
        }
        this.handleClick = this.handleClick.bind()
    }

    componentDidMount() {


    }

    handleClick(e) {
        this.setState(e => ({
            click: true
        }));
    }
    render() {
        return (
            <>
                <ul
                    onClick={this.handleClick}
                    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
                >
                    {this.state.projects.map((item, index) => {
                        return (
                            <li key={index}>
                                <div id='header-packages'>

                                    <div className='pw'>
                                        <div className='packages'>
                                            <div className='package'>
                                                <div className='header'>
                                                    <a className='title' href='https://base.vn/platform/work'>Base Work+</a>
                                                    <div className='info'>Quản trị công việc &amp; hiệu suất</div>
                                                </div>

                                                <div className='papps'>
                                                    <a className='app' href='https://base.vn/request'>
                                                        <span className='icon'><img src='https://share-gcdn.basecdn.net/apps/request.png' /></span>
                                                        <span className='name'>Base Request</span>
                                                        <span className='info'>Quản lý phê duyệt</span>
                                                    </a>

                                                    <a className='app' href='https://base.vn/wework'>
                                                        <span className='icon'><img src='https://share-gcdn.basecdn.net/apps/wework.png' /></span>
                                                        <span className='name'>Base Wework</span>
                                                        <span className='info'>Quản lý công việc &amp; dự án</span>
                                                    </a>

                                                    <a className='app' href='https://base.vn/workflow'>
                                                        <span className='icon'><img src='https://share-gcdn.basecdn.net/apps/workflow.png' /></span>
                                                        <span className='name'>Base Workflow</span>
                                                        <span className='info'>Quản lý quy trình</span>
                                                    </a>

                                                    <a className='app' href='https://base.vn/square'>
                                                        <span className='icon'><img src='https://share-gcdn.basecdn.net/apps/square.png' /></span>
                                                        <span className='name'>Base Square</span>
                                                        <span className='info'>Hỏi đáp &amp; Tri thức</span>
                                                    </a>

                                                    <a className='more' href='https://base.vn/platform/work'>&rarr; Xem thêm các ứng dụng khác</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </>

        );
    }
}

export default Package;
