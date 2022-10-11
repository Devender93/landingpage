import imgfrom 'next/image'
function Header() {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;0,700;0,800;1,500&family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,400&family=Oswald:wght@200;300&family=Raleway:ital,wght@0,200;0,400;0,600;0,700;0,800;1,500&family=Roboto:ital,wght@0,300;0,400;0,900;1,100&display=swap"/>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;0,700;0,800;1,500&family=Lato:ital,wght@0,400;0,700;0,900;1,900&family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,400&family=Oswald:wght@200;300&family=Raleway:ital,wght@0,200;0,400;0,600;0,700;0,800;1,500&family=Roboto:ital,wght@0,300;0,400;0,900;1,100&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
  <header>
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
				
			</ul>
		</div>
	</div>
    </header>
    </>
    )
}

export default Header