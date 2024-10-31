import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestion from "../components/GptMovieSuggestion";
import { BG_URL } from "../utils/constants";
const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10 opacity-90">
        <img
          src={BG_URL}
          alt="netflix-background-image"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage;