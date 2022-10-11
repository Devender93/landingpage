import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Footer from '../component/Footer'
import Header from '../component/Header'

export default function Home() {
  return (
    <>
<link rel="stylesheet" type="text/css" href="/css/style.css"/>
	<Header/>
<section>
	<div className="container-fluid">
		<div className="row">
			<div className="banner">
				<div className="banner-shape">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
						<path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>
						<path className="elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>
						<path className="elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>
						<path className="elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>
						<path className="elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>
						<path className="elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>
						<path className="elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>
						<path className="elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>
						<path className="elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>
					</svg>
				</div>
				<div className="banner-content">
					<h1>Enjoy Your Dream Vacation</h1>
					<p>Travel to the any corner of the world, without going around in circles.</p>
				
				</div>
			</div>
		</div>
	</div>
</section>
<section className="pt-5 pb-5">
	<div className="container-fluid">
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<div className="section-heading">
					<h1>Best Offers</h1>
					<p>Check out our top-rated tours</p>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-3 col-xs-12 col-lg-3">
						<div className="section-image">
							<Image  src="images/section-img0.jpg" />
						</div>
						<div className="section-content">
							<h5>Turkey</h5>
							<p>Istanbul, Antalya, Ephesus</p>
						</div>
					</div>
					<div className="col-sm-6 col-md-3 col-xs-12 col-lg-3">
						<div className="section-image">
							<Image  src="images/section-img1.jpg"/>
						</div>
						<div className="section-content">
							<h5>Spain</h5>
							<p>Madrid, Andalucia, Barcelona</p>
						</div>
					</div>
					<div className="col-sm-6 col-md-3 col-xs-12 col-lg-3">
						<div className="section-image">
							<Image  src="images/section-img2.jpg"/>
						</div>
						<div className="section-content">
							<h5>United Kingdom</h5>
							<p>England, Scotland, Wales</p>
						</div>
					</div>
					<div className="col-sm-6 col-md-3 col-xs-12 col-lg-3">
						<div className="section-image">
							<Image  src="images/section-img3.jpg"/>
						</div>
						<div className="section-content">
							<h5>Eastern Europe</h5>
							<p>Slovenia, Hungary, Poland</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="pt-0 pb-5">
	<div className="container-fluid">
		<div className="row">
			<div className="section">
				<div className="section-shape">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
						<path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
						<path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
						<path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
					</svg>
				</div>
				<div className="sec">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="section-heading1">
									<h1>Why Travellino</h1>
								</div>
							</div>
						</div>
						<div className="section-wrap">
							<div className="row">
								<div className="col-md-4 col-xs-12">
									<div className="section-color">
										<div className="section-ic">
											<i className="fa fa-area-chart"></i>
										</div>
										<div className="section-content01">
											<h4>PERSONALIZED MATCHING</h4>
											<p>We can provide up to 3 experienced travel specialists who fit best.</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-xs-12">
									<div className="section-color">
										<div className="section-ic">
											<i className="fa fa-address-book-o"></i>
										</div>
										<div className="section-content01">
											<h4>WIDE VARIETY OF DESTINATIONS</h4>
											<p>With Travellino, you’ll find a perfect destination among hundreds available.</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-xs-12">
									<div className="section-color">
										<div className="section-ic">
											<i className="fa fa-adjust"></i>
										</div>
										<div className="section-content01">
											<h4>HIGHLY QUALIFIED SERVICE</h4>
											<p>Our high level of service is officially recognized by thousands of clients.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-wrap">
							<div className="row">
								<div className="col-md-4 col-xs-12">
									<div className="section-color">
										<div className="section-ic">
											<i className="fa fa-align-center"></i>
										</div>
										<div className="section-content01">
											<h4>24/7 SUPPORT</h4>
											<p>Our travel agents are always there to support you during your trip.</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-xs-12">
									<div className="section-color">
										<div className="section-ic">
											<i className="fa fa-address-card-o"></i>
										</div>
										<div className="section-content01">
											<h4>HANDPICKED HOTELS</h4>
											<p>We pick the hotels with the utmost reputation and positive reviews.</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-xs-12">
									<div className="section-color">
										<div className="section-ic">
											<i className="fa fa-bath"></i>
										</div>
										<div className="section-content01">
											<h4>BEST PRICE GUARANTEE</h4>
											<p>We guarantee you’ll get top-notch comfort at an affordable price.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-shape1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
							<path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
							<path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
							<path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
						</svg>
					</div>	
				</div>			
			</div>
		</div>
	</div>
</section>
<section className="pt-0 pb-0">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="section-wrap1">
					<div className="section-image1">
						<Image  src="images/section-icon1.png"/>
					</div>
					<div className="sec-review">
						<span>623,744</span>
					</div>
					<div className="section-text">
						<p>Happy Clients</p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="section-wrap1">
					<div className="section-image1">
						<Image  src="images/section-icon2.png"/>
					</div>
					<div className="sec-review">
						<span>112</span>
					</div>
					<div className="section-text">
						<p>Amazing Tours</p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="section-wrap1">
					<div className="section-image1">
						<Image  src="images/section-icon3.png"/>
					</div>
					<div className="sec-review">
						<span>594</span>
					</div>
					<div className="section-text">
						<p>Partners</p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="section-wrap1">
					<div className="section-image1">
						<Image  src="images/section-icon4.png"/>
					</div>
					<div className="sec-review">
						<span>8,711</span>
					</div>
					<div className="section-text">
						<p>Questions Answered</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="pt-0 pb-0">
	<div className="container-fluid">
		<div className="row">
			<div className="section-0">
				<div className="section-shape2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
						<path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
						<path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
						<path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
					</svg>
				</div>
				<div className="sec1">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="section-content1">
									<h1>Fastest Way to Compare and Book <br/> over 450 Cheap Flights</h1>
									<a href="#" className="default-button">FIND YOUR FLIGHT</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-shape0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
						<path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
						<path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
						<path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>
<footer className="pt-3 pb-0">
<Footer/>
</footer>
</>

  )
}
