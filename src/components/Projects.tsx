import { forwardRef } from "react";
import ATPicture1 from "../assets/ATPicture1.webp";
import AT2000Logo from "../assets/AT2000-logo.webp";
import recipeAppScreen from "../assets/screenshot1 (Recipe App).png";
import doziesScreen from "../assets/screenshot2 (Dozies).png";
import hangLangScreen from "../assets/screenshot3 (HangLang).png";


type ProjectsProps = {lang : string};


const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  function Projects({lang}, projectsRef) {

    function displayTech(arrTech: Array<string>) {
      return (
        <div className="mt-1 w-64 flex flex-wrap">
          {arrTech.map( (x,i) =>
            <h3 key={i} className="ml-2 border rounded-md
                  border-purple-500 px-1 bg-purple-200 text-xs
                  font-semibold text-purple-900">{x}</h3>)}</div>)}


    return (<div ref={projectsRef}>
      <h2 className="mt-20 mb-2 bg-blue-800 py-2 text-center text-3xl
            font-bold text-teal-200">
        {lang === "En" ? "Projects" : "Projets"}</h2>
      <div className="mx-10 flex flex-wrap justify-around items-start">
      
        <div className="mt-10 sm:mt-8 flex flex-col items-center">
          <a href="https://recipe-app-delta-gules.vercel.app/"
                    target="_blank" rel="noopener noreferrer">
            <img src={recipeAppScreen}
                  alt="a desktop screenshot of 'Recipe App'"
                  className="my-1 w-64 h-36 shadow-2xl border-4 rounded-xl
                    border-cyan-400 object-cover object-center
                    cursor-pointer" /></a>
          {displayTech(["JavaScript", "React 19", "Tailwind 3"])}
          <p className="w-64 flex flex-wrap justify-start items-center px-2">
            <span className="space-x-2">
              <a href="https://recipe-app-delta-gules.vercel.app/"
                    target="_blank" rel="noopener noreferrer"
                    className="text-left text-sm text-teal-200 underline">
                {lang === "En" ?
                      "Enter your ingredients, and get a recipe using them"
                      : "Entrez vos ingrédients, et obtenez une recette les \
                        utilisant"}</a>
              <a href="https://github.com/AlanTuring2000/Recipe-App"
                    target="_blank" rel="noopener noreferrer"
                    className="text-left text-sm text-purple-200 underline">
                {lang === "En" ? "(Github repo)" : "(lien Github)"}</a></span></p></div>
        
        <div className="mt-8 flex flex-col items-center">
          <a href="https://dozies.vercel.app/"
                target="_blank" rel="noopener noreferrer">
            <img src={doziesScreen} alt="a desktop screenshot of 'Dozies'"
                  className="my-1 w-64 h-36 shadow-2xl border-4 rounded-xl
                    border-cyan-400 object-cover object-center
                    cursor-pointer" /></a>
          {displayTech(["JavaScript", "React 19", "Tailwind 4"])}
          <p className="w-64 flex flex-wrap justify-start items-center px-2">
            <span className="space-x-2">
              <a href="https://dozies.vercel.app/"
                    target="_blank" rel="noopener noreferrer"
                    className="text-left text-sm text-teal-200 underline">
                {lang === "En" ?
                  "Roll and freeze the dice until all twelve are the same"
                  : "Lancez et gelez les dés pour que les douze soient \
                    identiques"}</a>
              <a href="https://github.com/AlanTuring2000/Dozies"
                    target="_blank" rel="noopener noreferrer"
                    className="text-left text-sm text-purple-200 underline">
                {lang === "En" ? "(Github repo)" : "(lien Github)"}</a></span></p></div>
        
        <div className="mt-8 flex flex-col items-center">
          <a href="https://hang-lang.vercel.app/"
                target="_blank" rel="noopener noreferrer">
            <img src={hangLangScreen} alt="a desktop screenshot of 'HangLang'"
                  className="my-1 w-64 h-36 shadow-2xl border-4 rounded-xl
                    border-cyan-400 object-cover object-center
                    cursor-pointer" /></a>
          {displayTech(["JavaScript", "React 19", "Tailwind 4"])}
          <p className="w-64 flex flex-wrap justify-start items-center px-2">
            <span className="space-x-2">
              <a href="https://hang-lang.vercel.app/"
                    target="_blank" rel="noopener noreferrer"
                    className="text-left text-sm text-teal-200 underline">
                {lang === "En" ?
                  'A peaceful "hangman" game'
                  : 'Un "jeu du pendu" sans que personne ne soit pendu'}</a>
              <a href="https://github.com/AlanTuring2000/HangLang"
                    target="_blank" rel="noopener noreferrer"
                    className="text-left text-sm text-purple-200 underline">
                {lang === "En" ? "(Github repo)" : "(lien Github)"}</a></span></p></div>
        
        <div className="mt-8 flex flex-col items-center">
          <a href="https://github.com/AlanTuring2000/ML-basics"
                target="_blank" rel="noopener noreferrer">
            <img src={ATPicture1}
                  alt="An artwork of a futuristic Alan Turing, thinking and \
                    determined to improve the world for everyone. You'll be \
                    the only one to know that the link won't lead to a \
                    handsome creature, but to a much less engaging series \
                    of free notebooks I wrote about ML basics in homage to \
                    the father of AI."
                  className="my-1 w-64 h-36 shadow-2xl border-4 rounded-xl
                    border-cyan-400 object-cover object-center
                    cursor-pointer" /></a>
          <a href="https://github.com/AlanTuring2000/ML-basics"
                target="_blank" rel="noopener noreferrer"
                className="w-64 px-2 text-center text-teal-200 underline">
            The basics of Machine learning</a></div>
        
        <div className="mt-8 flex flex-col items-center">
          <a href="https://github.com/AlanTuring2000/DL-basics"
                target="_blank" rel="noopener noreferrer">
            <img src={AT2000Logo}
                  alt="Another artwork of a futuristic Alan Turing, again \
                    in cyberpunk colors, benevolent and smiling at you, \
                    instead of a less engaging image of a notebook. The \
                    link goes to a series of free notebooks about DL basics \
                    I wrote and offer you for free."
                  className="my-1 w-64 h-36 shadow-2xl border-4 rounded-xl
                    border-cyan-400 object-cover object-center
                    cursor-pointer" /></a>
          <a href="https://github.com/AlanTuring2000/DL-basics"
                target="_blank" rel="noopener noreferrer"
                className="w-64 px-2 text-center text-teal-200 underline">
            The basics of Deep Learning</a></div>
      </div></div>)})


    export { Projects }