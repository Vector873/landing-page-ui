import React from "react";
import style from "./Home.module.css";
import { Container } from "react-bootstrap";
import maskgroup from "../../assets/Maskgroup.png";
import phone1 from "../../assets/Group3611.png";
import phone2 from "../../assets/Group3612.png";
import google from "../../assets/google.png";
import appstore from "../../assets/appstore.png";
import Ellipse from "../../assets/Ellipse.png";
import Header from "../../components/Header";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import maskgroup2 from "../../assets/Maskgroup2.png";
import phoneframe from "../../assets/Frame3617.png";
import cellphone from "../../assets/Icons/cell-phone.png";
import browsericon from "../../assets/Icons/browser.png";
import eye from "../../assets/Icons/eye-scanner 1.png";
import cell from "../../assets/lorem.png";
import david from "../../assets/david.png";
import arrow1 from "../../assets/Arrow 3.png";
import arrow2 from "../../assets/Arrow 2.png";
import newframe from "../../assets/newframe.png";
import newbg from "../../assets/newsletterbg.png";
import footerbg from "../../assets/footerbg.png";
import logo from "../../assets/logo.png";
import flag from "../../assets/flag.png";
function Home() {
  return (
    <div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Header />
      </div>
      <section className={style.welcome_wrapper}>
        <Container className={style.welcome_container}>
          <img
            src={maskgroup}
            alt="image not found"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: "-1",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={style.welcomebox}>
              <div className={style.welcome}>
                <div>
                  <strong>Welcome to</strong>
                  <h1>American Ripo</h1>
                </div>
                <p>
                  Use a subheadline to provide a brief explanation of how the
                  chatbot can make users' lives easier or more enjoyable.
                </p>
                <div>
                  <h3>Download App Now</h3>
                  <img
                    src={google}
                    alt="image not found"
                    style={{ height: "2.6rem", width: "8rem" }}
                  />
                  <img
                    src={appstore}
                    alt="image not found"
                    style={{ height: "2.6rem", width: "8rem" }}
                  />
                </div>
              </div>
              <div className={style.phones}>
                <img
                  src={Ellipse}
                  alt="image not found"
                  className={style.ellipse}
                />
                <img
                  src={phone1}
                  alt="image not found"
                  className={style.phone1}
                />
                <img
                  src={phone2}
                  alt="image not found"
                  className={style.phone2}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={style.about_wrapper}>
        <Container className={style.about_container}>
          <div>
            <img
              src={phone2}
              alt="image not found"
              className={style.aboutphone}
            />
            <div className={style.abouticons}>
              <FaFacebookF />
              <RiInstagramFill />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
          <div className={style.about}>
            <div className={style.abouthead}>
              <h1>
                About the <br />
                American Ripo
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </p>
            </div>
            <div className={style.aboutboxes}>
              <div className={style.aboutbox}>
                <FaCircleCheck className={style.checkicon} />
                <div>
                  <h4>Key features and capabilities of your chatbot.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam
                    lobortis enim.{" "}
                  </p>
                </div>
              </div>
              <div className={style.aboutbox}>
                <FaCircleCheck className={style.checkicon} />
                <div>
                  <h4>Use icons or visuals to illustrate each feature..</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam
                    lobortis enim.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={style.secondbox}>
              <div className={style.aboutbox}>
                <FaCircleCheck className={style.checkicon} />
                <div>
                  <h4>Use icons or visuals to illustrate each feature..</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam
                    lobortis enim.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={style.features_wrapper}>
        <Container className={style.features_container}>
          <img
            src={maskgroup2}
            alt="image not found"
            className={style.maskgroup2}
          />
          <div className={style.featurebox}>
            <img
              src={phoneframe}
              alt="image not found"
              className={style.frame}
            />
            <div className={style.features}>
              <h1>
                Features <br /> and Capabilities
              </h1>
              <div className={style.flists}>
                <img
                  src={cellphone}
                  alt="image not found"
                  className={style.ficons}
                />
                <span>Iso & androind version</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className={style.flists}>
                <img
                  src={browsericon}
                  alt="image not found"
                  className={style.ficons}
                />
                <span>Unlimiter featuresn</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className={style.flists}>
                <img src={eye} alt="image not found" className={style.ficons} />
                <span>Retina ready greaphics</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={style.lorem_wrapper}>
        <Container className={style.lorem_container}>
          <h1>Lorem ipsum dummy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          <img src={cell} alt="image not found" className={style.cell} />
          <h3>Download App Now</h3>
          <div>
            <img
              src={google}
              alt="image not found"
              style={{ height: "2.6rem", width: "8rem" }}
            />
            <img
              src={appstore}
              alt="image not found"
              style={{ height: "2.6rem", width: "8rem" }}
            />
          </div>
        </Container>
      </section>
      <section className={style.clients_wrapper}>
        <Container className={style.clients_container}>
          <div className={style.clients}>
            <div className={style.clientSays}>
              <h2>What</h2>
              <h2>Clients</h2>
              <h2>Says</h2>
            </div>
            <div className={style.clientPara}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
              </p>
              <div className={style.cprofile}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                    gap: "4px",
                  }}
                >
                  <img src={david} alt="image not found" />
                  <div className={style.cname}>
                    <span>David Valley</span>
                    <p>Team real estate</p>
                  </div>
                </div>
                <div className={style.arrows}>
                  <img src={arrow1} alt="image not found" />
                  <img src={arrow2} alt="image not found" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={style.newsletter_wrapper}>
        <Container className={style.newsletter_container}>
          <img src={newbg} alt="image not found" className={style.newbg} />
          <div className={style.newsletter}>
            <img
              src={newframe}
              alt="image not found"
              className={style.newframe}
            />
            <div className={style.signup}>
              <h1>Newsletter Signup</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.{" "}
              </p>
              <input type="text" placeholder="Email" />
              <button>Signup</button>
            </div>
          </div>
        </Container>
      </section>
      <section className={style.footer_wrapper}>
        <Container className={style.footer_container}>
          <div style={{ marginTop: "2rem" }}>
            <img
              src={footerbg}
              alt="image not found"
              className={style.footerbg}
            />
            <img src={flag} alt="image not found" className={style.flag} />
            <div className={style.footer}>
              <img src={logo} alt="image not found" />
              <div className={style.footericon}>
                <FaFacebookF />
                <RiInstagramFill />
                <FaTwitter />
                <FaYoutube />
              </div>
              <div className={style.copy}>
                <p>Copyright © 2023. All rights reserved</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
