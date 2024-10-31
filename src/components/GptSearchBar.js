import { useSelector } from "react-redux";
import lang from "../utils/lang";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center pt-[10%]">
      <form className="bg-black grid grid-cols-12 w-1/2">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchBarPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button className="bg-red-700 rounded-lg text-white px-4 py-2 m-4 col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
