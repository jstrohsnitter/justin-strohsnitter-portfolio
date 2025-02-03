
function WebDev({ changePage }) {


	return (
		<>
			<h1 className="webDevHeader">Portfolio</h1>
			<div className="thumbnailDiv">
				<div className="movieRecsThumb">
					<img src="./public/assets/Screen Shot 2025-01-23 at 4.46.01 PM.png" className="mrImage"/>
					<button className="movieRecsButton" onClick={changePage} value="movieRecs">Movie Watchlist App</button>
				</div>
				<div className="fishThumb">
					<img src="/assets/Screen Shot 2025-01-23 at 4.05.11 PM.png" className="fishImage"/>
					<button className="whereToFishButton" onClick={changePage} value="whereToFish">Where to Fish App</button>
				</div>
				<div className="pathThumb">
					<img src="/assets/Screen Shot 2025-01-23 at 3.07.54 PM.png" className="pathImage"/>
					<button className="chosenPathButton" onClick={changePage} value="chosenPath">Chosen Path Game</button>
				</div>
			</div>
		</>
	);
}

export default WebDev;
