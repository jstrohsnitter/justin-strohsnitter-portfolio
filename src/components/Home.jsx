function Home() {
	return (
		<>
		<div className="homeDiv">
			<h1 className="nameHeader">Justin Strohsnitter | Full Stack Engineer</h1>
			<h2 className="tagHeader">Web Development. Technical Leadership.</h2>
			{/* <h3 className="address">363 Manton Ave, Providence RI 02909</h3> */}
			<h3 onClick={() => window.location = 'mailto:jstrohsnitter@gmail.com'} className="email">jstrohsnitter@gmail.com</h3>
			{/* <h3 className="phoneNumber">+1 (508)-292-7411</h3> */}
		</div>   
		</>
	);
}

export default Home;