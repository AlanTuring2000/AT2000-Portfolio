import AT2000Logo from "../assets/AT2000-logo.webp";


function Footer() {
  return (
    <footer className="mt-16 ml-10 bg-blue-900 text-teal-200 text-left
          text-xs pb-4 space-y-2">
      <h4 className="shadow-2xl flex justify-start items-center font-inter
            text-xs">
        <img src={AT2000Logo} alt="My logo, representing a cyberpunk Alan \
              Turing's face and 'AT2000' written at the bottom left, close \
              to his chin"
              className="sm:mt-1 mr-2 w-6 h-6 rounded-md object-cover
                object-center" />
        AT2000</h4>
      <p>This site is an independent educational initiative dedicated to 
        Alan Turing's legacy. It is not affiliated with The Turing Trust, 
        The Alan Turing Institute, or any registered Turing trademarks.</p></footer>)}


export { Footer };