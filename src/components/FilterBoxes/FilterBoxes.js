import "./filterboxes.css";
import { useState } from "react";
import GenreBox from "./genreBox/GenreBox";
import LanguageBox from "./languageBox/LanguageBox";
import CountryBox from "./countryBox/CountryBox";
import RatingBox from "./ratingBox/RatingBox";
import YearRatingBox from "./yearRatingBox/yearRatingBox";

export default function FilterBoxes() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  return (
    <div className="formm">
      <GenreBox
        isOpen={openDropdown === "genre"}
        toggleDropdown={() => handleToggleDropdown("genre")}
      />
      <></>
      <LanguageBox
        isOpen={openDropdown === "language"}
        toggleDropdown={() => handleToggleDropdown("language")}
      />
      <></>
      <YearRatingBox
        isOpen={openDropdown === "year"}
        toggleDropdown={() => handleToggleDropdown("year")}
      />
      <></>
      <RatingBox
        isOpen={openDropdown === "rating"}
        toggleDropdown={() => handleToggleDropdown("rating")}
      />
      <></>
      <CountryBox
        isOpen={openDropdown === "country"}
        toggleDropdown={() => handleToggleDropdown("country")}
      />
      <></>
    </div>
  );
}
