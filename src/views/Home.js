import React from "react";
import "./styleViews.css";
import StarIcon from "@rsuite/icons/legacy/Star";
import { IconButton } from "rsuite";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/AllAlbums");
  };

  return (
    <div className="Home">
      <h1 className="TitleOfPage">MuzykaPL</h1>
      <h3 className="PageDescription">
        Gdziekolwiek chcesz... Gdziekolwiek lubisz...
      </h3>
      <IconButton
        icon={<StarIcon className="StarIcon" />}
        appearance="primary"
        className="ButtonOnHomePage"
        onClick={handleClick} // Dodaj obsługę kliknięcia
      >
        Już teraz znajdź twoją ulubioną muzykę
      </IconButton>
    </div>
  );
};

export default Home;
