import React from "react";
import "./styles.css"
function Footer() {

  return (
    <footer>
      <div className="footer">
        <div className="Container">
          <div className="Row">
            <div className="Column">
              <p className="Heading">NGUYEN HONG VI</p>
              <p className="Text">University of Information Technology</p>
              <p className="Text">Major: Computer and Communication Networks</p>
            </div >
            <div className="Column">
              <p className="Heading">About Me</p>
              <a className="FooterLink" href="https://www.facebook.com/hongvi.nguyen.75033/">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </a>
              <a className="FooterLink" href="#">
                <i className="fab fa-zalo">
                  <span style={{ marginLeft: "10px" }}>
                    Zalo
                  </span>
                </i>
              </a>
              <a className="FooterLink" href="https://github.com/nguyenhongvi2k1">
                <i className="fab fa-git">
                  <span style={{ marginLeft: "10px" }}>
                    Github
                  </span>
                </i>
              </a>

            </div>
            <div className="Column">
              <p className="Heading">Project</p>
              <a className="FooterLink" href="#">Website Cinema</a>
              <a className="FooterLink" href="#">Website Travel</a>
              <a className="FooterLink" href="#">Website </a>
            </div>

            <div className="Column">
              <p className="Heading">Contact Me</p>
              <a className="FooterLink">
                <form className="Form">
                  <input className="Input" type="text" placeholder="Input email..." required />
                  <input className="Input" type="text" placeholder="Input content..." required />
                  <button className="btn-sent">Sent</button>
                </form>

              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;