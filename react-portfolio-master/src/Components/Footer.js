import React, { Component } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social">
              <li>
                <a href="https://github.com/MarigonaN" target="_blank">
                  <AiFillGithub size={50} />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/marigona-nuhija-02275a173/"
                  target="_blank"
                >
                  <FaLinkedinIn size={50} />
                </a>
              </li>
            </ul>

            <ul>
              <li>Modified with love by Me ♥️</li>
            </ul>

            <ul className="copyright">
              <li>&copy; All credit goes to Marigona Nuhija</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
