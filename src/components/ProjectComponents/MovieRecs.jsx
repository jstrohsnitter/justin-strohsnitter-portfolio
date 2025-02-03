function MovieRecs() {
    return (
        <>
        <div className="movieRecsDiv">
			<h2 className="movieRecsHeader">Movie Watchlist MERN stack App</h2>
			<a style={{display: "table_cell"}} href="http://44.201.151.167:5173/" target="_blank" rel="noreferrer" className="movieRecsLink">Click this link to view the project</a>
			<p className="movieRecsP">This movie watchlist app was built with a team of two other classmates (Abdullah Durrani, and Miles Tarricone), and uses Mongoose, Express, React, and Node.js. This app takes an IMDbID, and makes a fetch request to the OMDb API, and displays the searched title. Once a movie is fetched the user can now add it to their watchlist, stored on MongoDB. The watchlist page will then call to the MongoDB API, and display the watchlist. A user can mark a movie watched or unwatched. The app also features multiple conditional operators for styling. For example, when a title is hovered over, data about the movie will show such as Cast, Plot, Year, Genre, and Runtime (if available in the OMDB API). A user authentication and profile capabilities were developed, but only implemented in beta due to time constraints. These features allowed a user to create an account, and view their own personal watchlist. These features also disallowed any unregistered user from accessing the watchlist, and search functionalities.</p>
			<img src="./assets/movieRecs/Screen Shot 2025-01-23 at 4.46.01 PM.png" className="movieRecImg"/>
            <img src="./assets/movieRecs/Screen Shot 2025-01-23 at 4.46.15 PM.png" className="movieRecImg"/>
            <img src="./assets/movieRecs/Screen Shot 2025-01-23 at 4.47.44 PM.png" className="movieRecImg"/>
            <img src="./assets/movieRecs/Screen Shot 2025-01-23 at 4.48.34 PM.png" className="movieRecImg"/>
            <img src="./assets/movieRecs/Screen Shot 2025-01-23 at 4.49.27 PM.png" className="movieRecImg"/>
            <img src="./assets/movieRecs/Screen Shot 2025-01-23 at 4.50.10 PM.png" className="movieRecImg"/>
            <img src="./assets/movieRecs/Screen Shot 2025-01-23 at 4.50.22 PM.png" className="movieRecImg"/>
		</div>
        </>
    )
}

export default MovieRecs