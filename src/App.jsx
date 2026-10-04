import { useState } from 'react'
import './App.css'
import CourseList from './CourseList.jsx'



function App() {

const [showCourses, setShowCourses] = useState(true);

const courses = [
    {
        id: 1,
        title: "Full Stack JavaScript",
        description: "Build modern web applications with JavaScript."
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        description: "Explore advanced JavaScript concepts and frameworks."
    },
     {
        id: 3,
        title: "Intro to  JavaScript",
        description: "Explore beginning JavaScript concepts and frameworks."
    },
    {
        id: 4,
        title: "Intro to  PHP",
        description: "Explore beginning Server Sided Coding."
    },
    {
        id: 5,
        title: "Intro to  Databases",
        description: "Explore beginning Databases."
    }
];


  return (
    <>
    <main className="container">
      <header>
        <p className="eyebrow">WEBD 172 • Week 5</p>
        <h1>Course Dashboard</h1>
        <p>A simple React dashboard built with components, props, state, and map().</p>
     <button onClick={function() {setShowCourses(!showCourses);}}>
      {showCourses ? "Hide Courses" : "Show Courses"}
    </button>
      </header>
    </main>
     {showCourses && <CourseList courses={courses} />}
    </>
  )
}

export default App
