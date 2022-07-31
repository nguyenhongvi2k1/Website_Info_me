import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style_pages.css"
import img from '../assets/img/_MG_1474.jpeg';
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
                <Header />
                <div className="Home justify-content-center">
                    <div className="About_me">
                        <h1 className="title_rem"><em>About Me</em></h1>
                        <div className="text" style={{ display: 'flex' }}>
                            <h2 style={{ textAlign: 'inherit', marginRight: '30px'}}>I completed websites while I was in school and I am confident in my ability to adapt to my new environment. Willing to learn and work.  I want to become a good Front-End developer within three years with the ability to analyze and find designing the theme. My greatest passion in life is to use my technique to create what I want and benefit people.
                            </h2>
                            <img className="img_avt" src={"https://media-exp2.licdn.com/dms/image/C4D03AQFvaHjwHD4mLQ/profile-displayphoto-shrink_800_800/0/1657545910888?e=1663804800&v=beta&t=AkEipqGYfbliwgvAVU-c1d7ozombhALZg0yIPYN4U74"} />
                        </div>
                    </div>
                    <hr width="100%" />
                    <div className="Skill">
                        <h2 className="title_row">Skill</h2>
                        <div className="packs">
                            <div className="pack">
                                <img className="img_btn" src={"https://resources.stdio.vn/content/article/gioi-thieu-va-cai-dat-node-js/thumbnail-hd/blob-1599795169826@1280x720.jpg"} />
                                <div class="title">NodeJS</div>
                                <div class="content">Node.js is a software system designed to write scalable internet applications, especially web servers.</div>
                            </div>
                            <div className="pack">
                                <img className="img_btn" src={"https://st.quantrimang.com/photos/image/2018/07/31/debug-trong-javascript-200.jpg"} />
                                <div class="title">JavaScript</div>
                                <div class="content">JavaScript is an interpreted programming language developed from the concept of prototypes.</div>
                            </div>
                            <div className="pack">
                                <img className="img_btn" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"} />
                                <div class="title">PostgreSQL</div>
                                <div class="content">PostgreSQL is an object and relational database management system based on POSTGRES.</div>
                            </div>
                        </div>
                        <div className="packs">
                            <div className="pack">
                                <img className="img_btn" src={"https://topdev.vn/blog/wp-content/uploads/2019/05/docker-banner.png"} />
                                <div className="title">Docker</div>
                                <div className="content">Docker is an open source project that automates the deployment of Linux and Windows applications into virtualized containers.</div>
                            </div>
                            <div className="pack">
                                <img className="img_btn" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhepCe0-oa3IX50xZ99ASEl8NVOaMlrcWLXPu2Wxa-cfDM8GSZjIOB2F_S0xxjMCueYI&usqp=CAU"} />
                                <div className="title">Linux</div>
                                <div className="content">Linux is a family of free and open source operating systems similar to Unix and based on the Linux kernel</div>
                            </div>
                            <div className="pack">
                                <img className="img_btn" src={"https://skypeenglish.vn/wp-content/uploads/2022/03/How-to-Learn-Spoken-English_-3.png"} />
                                <div className="title">English</div>
                                <div className="content">Bộ giải pháp quản lý công việc, quy trình và nâng cao năng suất</div>
                            </div>
                        </div>
                    </div>
                    <hr width="100%" />

                </div>
                <div className="Activitys">
                    <div className="Contents">
                    <h2 className="title_row">Activity</h2>
                        <div className="activity">
                            <img className="img_activity" src={"https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/279260079_5022471694511997_8301496233818522045_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q3K-ILkT_oUAX93RfPH&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-KXaZiNRQo2makS4YujtAl7gMCTlFazJ2qMcceFrxALA&oe=62DD5502"} />
                            <div style={{ marginLeft: "50px" }}>
                                <div className="title_activity">Chess</div>
                                <div className="content">Bộ giải pháp quản lý công việc, quy trình và nâng cao năng suất</div>
                            </div>
                        </div>
                        <div className="activity">
                            <img className="img_activity" src={"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/127712677_1504776259729193_6801709200673032764_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jXIM1W1TEnoAX88x-f5&_nc_ht=scontent.fdad1-1.fna&oh=00_AT-OtoaHhqq7pu87kpScCtgIuR93dkTD9GTpw2tRC3Hz0Q&oe=62FEA785"} />
                            <div style={{ marginLeft: "50px" }}>
                                <div className="title_activity">Volleyball</div>
                                <div className="content">Bộ giải pháp quản lý công việc, quy trình và nâng cao năng suất</div>
                            </div>
                        </div>
                        <div className="activity">
                            <img className="img_activity" src={"https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/281423467_10225544503332837_8639395396522336427_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=t-de4SWRRb4AX9WFRfu&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-9F82_jhTAGjC3YKl7qcoqb3kk2yKzpNwvPQouGUOmqw&oe=62DDE2F4"} />
                            <div style={{ marginLeft: "50px" }}>
                                <div className="title_activity">Football</div>
                                <div className="content">Bộ giải pháp quản lý công việc, quy trình và nâng cao năng suất</div>
                            </div>
                        </div>
                    </div>
                        

                    </div>
                <Footer />
            </>
        )
    }
}
export default Home;