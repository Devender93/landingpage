import imgfrom "next/image"
function Nav() {
  return (
    <>
    <div className="header-bar">
		<div className="web-header">
			<div className="header-info">
				<div className="heading">
					<h1>Enjoy Your Dream Vacation</h1>
				</div>
				<div className="header-content">
					<p>Travel To The Any Corner Of The World, Without Going Around In Circles</p>
				</div>
			</div>
			<div className="button">
				<a href="#">VIEW NOW!</a>
			</div>
		</div>
	</div>
	<div className="menubar">
		<div className="logo">
			<a href="#">
				<figure>
					<imgsrc="images/logo.png"/>
				</figure>
			</a>
		</div>
		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
        </button>
		<div className="menu">
			<ul className="menu-list navbar-toggle" id="myNavbar">
				<li><a href="#">HOME</a></li>
				<li><a href="#">ABOUT</a></li>
				<li><a href="#">BLOG</a></li>
				<li><a href="#">CONTACT</a></li>
			</ul>
		</div>
	</div>
    </>
  )
}

export default Nav