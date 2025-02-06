import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Hobbies from './components/Hobbies'
import Leadership from './components/Leadership'
import WebDev from './components/WebDevPortfolio'
import WorkExperience from './components/WorkExperience'
import MovieRecs from './components/ProjectComponents/MovieRecs'
import ChosenPath from './components/ProjectComponents/ChosenPath'
import WhereToFish from './components/ProjectComponents/WhereToFish'
import NavMobile from './components/NavMobile'

const App = () => {

  const [page, setPage] = useState("home")

  const changePage = (event) => {
    setPage(event.target.value)
  }

  return (
    <>
    {/* <img src='/assets/IMG_4118.jpg' className='bgPhoto'/> */}
    {/* is width is smaller than 450px, render hamburger menu */}
    <div className='navContainer'>
    <NavMobile changePage={changePage}/>
    </div>
    {/* nav bar on top of page, always showing */}
    <NavBar changePage={changePage}/>
<div className='content'>
    {/* home page shown by default */}
    {page === "home" ? <Home/> : ""}

    {/* other components */}
    {page === "about-me" ? <AboutMe/> : ""}
    {page === "work-experience" ? <WorkExperience/> : ""}
    {page === "web-dev-portfolio" ? <WebDev changePage={changePage} page={page}/> : ""}
    {page === "leadership" ? <Leadership/> : ""}
    {page === "hobbies" ? <Hobbies/> : ""}
    {page === "movieRecs" ? <MovieRecs/> : ""}
    {page === "chosenPath" ? <ChosenPath/> : ""}
    {page === "whereToFish" ? <WhereToFish/> : ""}
</div>

    </>
  );
};

export default App;
