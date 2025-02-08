import AT2000Logo from "../assets/AT2000-logo.webp";

type HeaderProps = {lang: string; setLang: (lang: string) => void;
      goToAbout: () => void; goToProjects: () => void};


function Header({ lang, setLang, goToAbout, goToProjects }: HeaderProps) {
  const lang2 = lang==="En"? "Fr" : "En";
  
  function changeLang() {setLang(lang2)}

  return (
    <div className="relative flex justify-around items-center bg-blue-800">
      <h1 className="mt-4 mb-8 shadow-2xl flex justify-center items-center
            font-inter text-teal-200 font-bold text-2xl sm:text-5xl">
        <img src={AT2000Logo} alt="My logo, representing a cyberpunk Alan \
              Turing's face and 'AT2000' written at the bottom left, close \
              to his chin"
              className="sm:mt-1 mr-2 w-10 h-10 sm:w-12 sm:h-12 rounded-md
                object-cover object-center" />
        AT2000</h1>
      <nav className="text-teal-200 text-xs sm:text-lg">
        <ul className="flex justify-center items-center space-x-4
              sm:space-x-8">
          <li><button onClick={goToAbout}
                className="hover:text-purple-400 cursor-pointer">
                {lang === "En" ? "About" : "À propos"}</button></li>
          <li><button onClick={goToProjects}
                className="hover:text-purple-400 cursor-pointer">
                {lang === "En" ? "Projects" : "Projets"}</button></li></ul></nav>
      <button onClick={changeLang} aria-label={`Switch languages between
            English and French; currently ${lang}`}
            className="absolute right-2 sm:right-10 mb-0.5 flex
              justify-center items-center bottom-2 font-mono text-xs
              sm:text-sm font-semibold text-purple-900 cursor-pointer">
        <span className="border-l-0 rounded-l-2xl bg-purple-200 pl-1.5
              sm:pl-2.5 pr-1 sm:pr-2 sm:py-0.5">{lang}</span>
        <span className="border-r-0 rounded-r-2xl bg-purple-500 pl-1
              sm:pl-2 pr-1.5 sm:pr-2.5 sm:py-0.5">{lang2}</span></button></div>)}


export { Header }