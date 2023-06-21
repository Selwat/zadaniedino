import React from "react";
import { useNavigate } from "react-router-dom";
import AlbumList from "../components/AlbumList";
import { albumsDataWithArtists } from "../data/database";
import "./styleViews.css";

const AllAlbums = () => {
  const navigate = useNavigate();

  const handleClick = (albumId) => {
    navigate(`/all-songs/${albumId}`);
  };

  const BackClick = (albumId) => {
    navigate("/");
  };

  return (
    <>
      <button className="buttonToBackToAlbums" onClick={BackClick}>
        <span className="material-symbols-outlined">arrow_back</span>
        Powrót
      </button>
      <h1 className="AllProductTitle">Wszystkie albumy</h1>
      <div className="AllProductContainer">
        <AlbumList albums={albumsDataWithArtists} handleClick={handleClick} />
      </div>
    </>
  );
};

export default AllAlbums;
