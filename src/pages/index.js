import React from "react"
import  Navbar  from "../components/navbar/Navbar"

export default function Home() {
  return (
    <>
    <Navbar 
    firstNavigation = "Projects" 
    secondNavigation = "Contact"
    firstLink = "/projects/"
    secondLink = "/contact/"
    />
    
    <br></br>
    <h1>Home</h1>
    </>
  )
}
