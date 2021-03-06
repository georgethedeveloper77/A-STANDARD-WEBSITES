import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom";  
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
 
const Footer = () => {
 
    const [scroll, setScroll] = useState(0);
    const [top, setTop] = useState(0);
  
    useEffect(() => {
      setTop(100);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      animateScroll.scrollToTop();
    };
  
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    return(
    <footer className="footer-section">
        <div className="container">
            <div className="row"> 
                {/*  Start:About  */}
                <div className="col-lg-3 col-sm-12">
					<Widget title="About us">
                        <p>Loren ipsum dolor cons ectetur adipi as scing elit sed do eiusmod tema atp aor incididunt know you labore et dolo rate always ready to welcome you have to know about </p>
                    </Widget>
                </div> 
                {/*  End:About  */}

                {/*  Start:Quick Link  */} 
                <div className="col-lg-3 col-sm-12"> 
                    <Widget title="Helpful Link">
                        <List classes="recent-post helpful_post">
                            <LI>
                                <Link to={process.env.PUBLIC_URL + "/about"}>Why choose us</Link>
                            </LI>
                            <LI>
                                <Link to={process.env.PUBLIC_URL + "/services"}>Our service</Link>
                            </LI>
                            <LI>
                                <Link to={process.env.PUBLIC_URL + "/single-services"}>About us</Link>
                            </LI> 
                        </List>
                    </Widget> 
                </div> 
                {/*  End:Quick Link  */}
 
                {/*  Start:Latest post   */}
                <div className="col-lg-3 col-sm-12"> 
                    <Widget title="Latest Articles">
                        <List classes="recent-post">
                            <LI>  
                                <Link to={process.env.PUBLIC_URL + "/blog"}>Loren ipsum dolor consectetur  </Link>
                            </LI>
                            <LI>  
                                <Link to={process.env.PUBLIC_URL + "/blog"}>Loren ipsum dolor consectetur  </Link>
                            </LI>
                            <LI>  
                                <Link to={process.env.PUBLIC_URL + "/blog"}>Loren ipsum dolor consectetur  </Link>
                            </LI>
                        </List>
                    </Widget> 
                </div> 
                {/*  End:Latest post  */}


                {/*  Start:Newsletter  */} 
                <div className="col-lg-3 col-sm-12"> 
                    <Widget title="Subcribe now">
                        {/*  Start:Subscribe  */}
                        <div className="news_letter_wrp">
                            <p>Subscribe our newsletter to get more update &  join to Elizah </p>
                            <form className="footer_subs">
                            <input className="form-input" placeholder="Enter Your Email Address" type="text" />
                            <button type="submit" className="form-button"></button>
                            </form>
                            {/*  END MAILCHIMP FORM  */}                         
                        </div> 
                    </Widget> 
                </div> 
                {/*  End:Start Subscribe  */} 
 

                {/*  Start:Subfooter  */}
                <div className="subfooter"> 
                    <div className="copyright_text"> &copy; {new Date().getFullYear()} Elizah  - HTML Template From <Link to={process.env.PUBLIC_URL + "/"}>Wcompany </Link>
                    </div> 

                    {/* SOCIAL ICON */} 
                    <div className="footer_social"> 
                        <ul className="footer_social_icons">
                        <li> <a href="//facebook.com"><i className="fa fa-facebook"></i></a> </li>
                        <li> <a href="//twitter.com"><i className="fa fa-twitter"></i></a> </li>
                        <li> <a href="//instagram.com"><i className="fa fa-instagram"></i></a> </li>
                        <li> <a href="//pinterest.com"><i className="fa fa-pinterest"></i></a> </li>
                        </ul>
                    </div>

                    <button className={`scrollup ${scroll > top ? "show" : ""}`} onClick={() => scrollToTop()} > 
                        <span className="arrow_triangle-up"></span>
                    </button> 
                </div> 
                {/* End:Subfooter  */}

            </div>
        </div> 

    </footer> 

        )
 
}

 
export default Footer;