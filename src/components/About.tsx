import myPicture4 from "../assets/myPicture4.webp";
import { forwardRef } from "react";
import educationLogo from "../assets/education.jpg";
import { AcademicCap } from "../assets/academic-cap.tsx";
import AILogo from "../assets/AI-logo.jpg";
import { AISmile } from "../assets/ai-smile.tsx";
import webdevLogo from "../assets/webdev.jpeg";
import { WebDev } from "../assets/webdev.tsx";


type AboutProps = {lang : string};


const About = forwardRef<HTMLDivElement, AboutProps>(
  function About({lang}, aboutRef) {
    // Experimenting with style constants
    const sectionStyle = "ml-1 md:my-1 w-11/12 bg-blue-800 text-teal-200 \
          flex justify-center items-center border rounded-md border-teal-200";
    const imageStyle = "mr-1 w-10 sm:w-16 md:w-28 md:h-28 border \
          rounded-l-md object-cover object-center";
    const smallTitleStyle = "flex justify-start items-center text-lg \
          sm:text-xl font-bold";
    const iconStyle = "ml-0.5 sm:ml-1.5 mr-1.5 sm:mr-2 w-4 text-teal-200";
    const descriptionStyle = "sm:mt-1.5 ml-0.5 sm:ml-1.5 text-xs \
          sm:text-base italic text-purple-300";

    return (<div ref={aboutRef}>
    <h2 className="mt-20 bg-blue-800 py-2 text-center text-3xl font-bold
          text-teal-200">
      {lang === "En" ? "About" : "À propos"}</h2>
    <div className="mt-10 mb-6 flex justify-center items-center">
      <img src={myPicture4} alt="Another picture of my future self"
            className="ml-0.5 sm:ml-10 w-32 sm:w-56 md:w-96 h-72 sm:h-96
              border-2 border-purple-400 rounded-md sm:rounded-xl
              shadow-[0px_0px_20px_-5px_rgba(255,0,255,0.8)]
              object-cover object-center" />
      <div className="flex flex-col justify-center items-center">
      
        <div className = {sectionStyle}>
          <img src={educationLogo}
                alt="a painting showcasing a corridor of bookcases opening \
                  up on a piece of imaginary green nature with pine trees, \
                  a sun and a cascade above it"
                className = {`h-32 ${imageStyle}`} />
          <div className="flex flex-col justify-around items-start">
            <h3 className = {smallTitleStyle}>
              <AcademicCap aria-label="icon of an academic hat"
                    className = {iconStyle} />
              {lang === "En" ? "Education" : "Éducation"}</h3>
            <span className = {descriptionStyle}>
              {lang === "En" ? "I have a PhD in maths applied to QM. I have \
              taught maths at all levels, from kindergarten to graduate \
              students."
              : "J'ai un doctorat de maths appliquées à la mécanique \
              quantique (Paris 6). J'ai enseigné les maths de la maternelle \
              au masters."}</span></div></div>
        
        <div className = {sectionStyle}>
          <img src={AILogo}
                alt="a benevolent AI face looking down at a futuristic city"
                className = {`h-24 ${imageStyle}`} />
          <div className="flex flex-col justify-around items-start">
            <h3 className = {smallTitleStyle}>
              <AISmile aria-label="icon of a smiling emoji to illustrate a \
                benevolent AI"
                    className = {iconStyle} />
              AI•ML•DL</h3>
            <span className = {descriptionStyle}>
              {lang === "En" ? "Below, I share a series of notebooks I have \
                written that cover the basics of ML and DL."
              : "Je partage ci-dessous une série de notebooks personnels \
                couvrant les bases du ML et du DL."}</span></div></div>
        
        <div className = {sectionStyle}>
          <img src={webdevLogo}
                alt="a drawing of my future self in front of a screen, \
                  coding"
                className = {`h-24 ${imageStyle}`} />
          <div className="flex flex-col justify-around items-start">
          <h3 className = {smallTitleStyle}>
              <WebDev aria-label="usual icon with chevrons for web dev"
                    className = {iconStyle} />
              {lang === "En" ? "Web dev" : "Dév web"}</h3>
            <span className = {descriptionStyle}>
              {lang === "En" ? "You will also find some websites I have \
                built using JS, TS, React19, Nextjs15 and Tailwind4."
              : "Vous trouverez aussi des sites que j'ai contruits avec \
              JS, TS, React19, Nextjs15 et Tailwind4."}</span></div></div></div></div></div>)})


export { About }