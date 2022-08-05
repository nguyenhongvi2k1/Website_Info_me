import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import chess from "../assets/img/chess.jpg"
import football from "../assets/img/football.jpg"
import "./style_pages.css"
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
                                <img className="img_btn" src={"https://d50cmv7hkyx4e.cloudfront.net/wp-content/uploads/2021/06/19125352/logo-reactjs-1024x538.png"} />
                                <div className="title">ReactJS</div>
                                <div className="content">React is a free and open source front-end JavaScript library for building user interfaces based on UI components.</div>
                            </div>
                            <div className="pack">
                                <img className="img_btn" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhepCe0-oa3IX50xZ99ASEl8NVOaMlrcWLXPu2Wxa-cfDM8GSZjIOB2F_S0xxjMCueYI&usqp=CAU"} />
                                <div className="title">Linux</div>
                                <div className="content">Linux is a family of free and open source operating systems similar to Unix and based on the Linux kernel</div>
                            </div>
                            <div className="pack">
                                <img className="img_btn" src={"https://skypeenglish.vn/wp-content/uploads/2022/03/How-to-Learn-Spoken-English_-3.png"} />
                                <div className="title">English</div>
                                <div className="content">A second language can communicate with foreigners</div>
                            </div>
                        </div>
                    </div>
                    <hr width="100%" />

                </div>
                <div className="Activitys">
                    <div className="Contents">
                    <h2 className="title_row">Activity</h2>
                        <div className="activity">
                            <img className="img_activity" src={chess} />
                            <div style={{ marginLeft: "50px" }}>
                                <div className="title_activity">Chess</div>
                                <div className="content"  style={{color: "black"}}>The club has organized many very attractive tournaments thanks to the school's candidates.</div>
                                <div className="content"  style={{color: "black"}}>In addition, there are national college tournament matches between schools.</div>
                                <div className="content"  style={{color: "black"}}>
                                In the past 3 years, I have won
                                <ul>
                                    <li>Bronze medal in 2020 at University of Information Technology</li>
                                   <li>Silver medal in 2021 at University of Information Technology</li>
                                   <li>Gold medal in 2022 at University of Information Technology</li>
                                   <li>1 team prize when participating in the national university tournament between schools.</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="activity">
                            <img className="img_activity" src={"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/127712677_1504776259729193_6801709200673032764_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jXIM1W1TEnoAX88x-f5&_nc_ht=scontent.fdad1-1.fna&oh=00_AT-OtoaHhqq7pu87kpScCtgIuR93dkTD9GTpw2tRC3Hz0Q&oe=62FEA785"} />
                            <div style={{ marginLeft: "50px" }}>
                                <div className="title_activity">Volleyball</div>
                                <div className="content" style={{color: "black"}}>Volleyball clubs often organize tournaments between the school's faculties</div>
                                <div className="content" style={{color: "black"}}>In the past 3 years, I have won
                                <ul>
                                    <li>Gold medal in 2020 at University of Information Technology</li>
                                   <li>Bronze medal in 2022 at University of Information Technology</li>
                                </ul>
                                </div>

                            </div>
                        </div>
                        <div className="activity">
                            <img className="img_activity" src={football} />
                            <div style={{ marginLeft: "50px" }}>
                                <div className="title_activity">Football</div>
                                <div className="content" style={{color: "black"}}>Football clubs often organize tournaments between the school's faculties</div>
                                <div className="content" style={{color: "black"}}>In the past 3 years, I have won
                                <ul>
                                    <li>Gold medal in 2020 at University of Information Technology</li>
                                   <li>Bronze medal in 2022 at University of Information Technology</li>
                                </ul>
                                </div>
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