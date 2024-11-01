import { useSelector } from "react-redux";
import lang from "../utils/lang";
import { useRef } from "react";
import googleGenerativeAI from "../utils/geminiConfig";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    try {
      const model = googleGenerativeAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
      const gptQuery =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give names of 5 movies, comma-separated like the example result given ahead. Example Result: Shaitaan, Jigra, Golmaal, Andadhun, Fighter";
  
      const result = await model.generateContent(gptQuery);
      console.log(result.response.text());
    } catch (error) {
      console.error('Error generating content:', error);
    }

  };
  return (
    <div className="flex justify-center pt-[10%]">
      <form
        className="bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchBarPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="bg-red-700 rounded-lg text-white px-4 py-2 m-4 col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
