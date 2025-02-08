import myPicture from "../assets/myPicture.webp";

type HomeProps = { lang: string };

function Home({ lang }: HomeProps) {
  return (
    <div className="mt-6 mb-4 flex justify-around items-center">
      <div className="flex flex-col justify-center items-center
            text-purple-300 space-y-2">
        <h2 className="mb-4 text-lg sm:text-2xl font-semibold
              text-teal-200">{lang === "En" ? "Hello, I am AT2000" 
                    : "Salut! Je suis AT2000"}</h2>
        <p className="text-sm sm:text-xl">{lang === "En" ? "I am a math \
              expert," : "Je suis docteur en maths,"}</p>
        <p className="text-sm sm:text-xl">{lang === "En" ? "and I teach \
              chess." : "et j'enseigne les échecs."}</p>
        <p className="mt-3 text-sm sm:text-xl">{lang === "En" ? "I am \
              passionate about AI," : "Je suis passionné d'IA,"}</p>
        <p className="text-sm sm:text-xl">{lang === "En" ? "and I build \
              websites for fun." : "et je construis des sites web."}</p>
      </div>
      <img src={myPicture} alt="Cyberpunk portrait of a futuristic me,
      resembling Alan Turing, named AT2000"
            className="w-36 sm:w-96 h-72 sm:h-96 border-0 rounded-md
              sm:rounded-xl
              shadow-xl md:shadow-[0px_0px_15px_-0px_rgba(0,255,255,0.8)]
              object-cover object-center" />
    </div>)}


export { Home }