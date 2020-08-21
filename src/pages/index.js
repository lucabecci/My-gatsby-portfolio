import React from "react"
//Components Imports
import  Navbar  from "../components/navbar/Navbar"
import Information from "../components/information/Information"
import InformationMe from "../components/me/InformationMe"

export default function Home() {
  return (
    <>
    <Navbar 
    firstNavigation = "Projects" 
    secondNavigation = "Contact"
    firstLink = "/projects/"
    secondLink = "/contact/"
    />
    <Information
    firstInformation = 'Welcome to my '
    secondInformation = "Hi, I'm a front-end developer"
    wordSpan= 'Portfolio!'
    />
    <InformationMe/>
    </>
  )
}
