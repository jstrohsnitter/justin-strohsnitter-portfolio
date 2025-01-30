function WhereToFish() {
    return (
        <>
        <div className="whereToFishDiv">
			<h2 className="whereToFishHeader">Where to Fish MEN stack App</h2>
			<a style={{display: "table_cell"}} href="http://44.201.151.167:4000/" target="_blank" rel="noreferrer" className="whereToFishLink">Click this link to view the project</a>
			<p className="whereToFishP">This 'Where To Fish' app is an app I built using Mongoose, Express, and Node.js. It is a simple CRUD app that allows users to log a fishing trip, and add some details, like the fish they caught (if any). In the new trip form, a user is prompted to add the coordinates of their trip, and the coordinates used are added to a fetch request to the Windy API to pull select weather data. While building this app, I added swell information in, as I live by the coast, and fish on the ocean. Because I am using the free Windy API, the data is randomly generated, and does not actually show the correct data for that day, time, and location. However, due to the accuracy of the fetch request, if the paid version was implemented, the data would be correct. I had a few stretch goals for this project. The first was being able to click a location on a map, and have those coordinates populate the form. Due to lack of experience at the time, I wasn't able to fully accomplish this goal. I was able to get a map to show (which shows after the page is refreshed), and the coordinates of a clicked location will show. However, the will not populate the form. The second stretch goal I had was to write and implement an algorithm that would generate a recommendation of where to fish based on current conditions, past conditions, and successes. I ran out of time for the project, and was not able to complete this goal.</p>
			<img src="/assets/Where to fish photos/Screen Shot 2025-01-23 at 4.05.11 PM.png" className="whereToFishImg"/>
            <img src="/assets/Where to fish photos/Screen Shot 2025-01-23 at 4.05.37 PM.png" className="whereToFishImg"/>
            <img src="/assets/Where to fish photos/Screen Shot 2025-01-23 at 4.05.59 PM.png" className="whereToFishImg"/>
            <img src="/assets/Where to fish photos/Screen Shot 2025-01-23 at 4.08.06 PM.png" className="whereToFishImg"/>
            <img src="/assets/Where to fish photos/Screen Shot 2025-01-23 at 4.08.53 PM.png" className="whereToFishImg"/>
            <img src="/assets/Where to fish photos/Screen Shot 2025-01-23 at 4.09.30 PM.png" className="whereToFishImg"/>
		</div>
        </>
    )
}

export default WhereToFish