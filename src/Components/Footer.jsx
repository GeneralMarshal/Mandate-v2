import "../Styles/Footer.css"

export default function Footer(){
    return (
      <>
        <div className="footer flex w-[100%] justify-center">
          <div className=" max-w-[1400px] w-[100%]">
            <div className="links w-[100%] max-w-[800px]">
              <div>
                <ul>
                  <li>Support</li>
                  <li>Help Center</li>
                  <li>Request Virtual Tour</li>
                  <li>Register a complaint</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="quick-links">Quick Links</li>
                  <li>Become a host</li>
                  <li>Search properties</li>
                  <li>Top deals</li>
                </ul>
              </div>
            </div>
            <div className="footer-foot">
              <div className="copyright-privacy">
                <p className="copyright">© 2024 Mandates.One</p>
                <p className="privacy-policy">
                  {" "}
                  <span>.</span> Privacy <span>.</span> Your Privacy Choices
                  <div className="privacy-icon">
                    <div className="skew"></div>
                    <div className="privacy-check">
                      <img
                        src="./Assets/icons/check.svg"
                        alt=""
                        className="check"
                      />
                    </div>
                    <div className="privacy-ex">
                      <img src="./Assets/icons/ex.svg" alt="" className="ex" />
                    </div>
                  </div>
                </p>
              </div>
              <div className="language-social">
                <div className="language">
                  <img src="./Assets/icons/globe.svg" alt="" />
                  <p>English (US)</p>
                </div>
                <div className="currency">
                  <img src="./Assets/icons/naira.svg" alt="" />
                  <p>NGN</p>
                </div>
                <div className="social">
                  <img src="./Assets/icons/facebook.svg" alt="" />
                  <img src="./Assets/icons/twitter.svg" alt="" />
                  <img src="./Assets/icons/instagram.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}