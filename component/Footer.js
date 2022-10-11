import imgfrom 'next/image'
function Footer() {
  return (
    <>
    <div className="section-color1">
    <div className="container">		
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xs-12">
                <div className="logo1">
                    <a href="#">
                        <figure>
                            <img src="images/logo.png"/>
                        </figure>
                    </a>
                </div>
                <div className="text">
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.  </p>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xs-12">
                <div className="section-heading2">
                    <h4>USEFUL LINKS</h4>
                </div>
                <div className="menu1">
                    <ul className="menu-list1">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xs-12">
                <div className="section-heading2" style={{textAlign: 'left'}}>
                    <h4>OUR SOCIAL NETWORKS</h4>
                </div>
                <div className="text1">
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                </div>
                <div className="social">
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-vimeo"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div></>
  )
}

export default Footer