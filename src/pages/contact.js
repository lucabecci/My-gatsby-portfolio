import React from "react"
import  Navbar  from "../components/navbar/Navbar"

export default function Contact() {
  return (
    <>
    <Navbar 
    firstNavigation = "Home" 
    secondNavigation = "Projects"
    firstLink = "/"
    secondLink = "/projects/"
    />
    <br></br>
    <h1>Contact</h1>
    </>
  )
}
