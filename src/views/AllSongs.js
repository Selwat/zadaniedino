import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { albumsDataWithArtists, songsData } from "../data/database";
import "./styleViews.css";
import { Drawer, Button } from "rsuite";
import SongList from "../components/SongList";

const AllSongs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/AllAlbums");
  };

  const [open, setOpen] = useState(false);
  const [selectedSongText, setSelectedSongText] = useState("");
  const [selectedSongTitle, setSelectedSongTitle] = useState("");

  const { albumId } = useParams();
  const selectedAlbumId = parseInt(albumId);

  const selectedAlbum = albumsDataWithArtists.find(
    (album) => album.id === selectedAlbumId
  );

  const selectedAlbumTitle = selectedAlbum ? selectedAlbum.title : "";

  const filteredSongs = songsData.filter(
    (song) => song.albumId === selectedAlbumId
  );

  const handleExpandClick = (songText, songTitle) => {
    setSelectedSongText(songText);
    setSelectedSongTitle(songTitle);
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="buttonToBackToAlbums" onClick={handleClick}>
        <span className="material-symbols-outlined">arrow_back</span>
        Powrót
      </button>

      <h2 className="SelectedAlbumTitle">
        Wybrany album: {selectedAlbumTitle}
      </h2>

      <SongList songs={filteredSongs} handleExpandClick={handleExpandClick} />

      <Drawer placement="bottom" open={open} onClose={handleCloseDrawer}>
        <Drawer.Header>
          <Drawer.Title>Wybrana piosenka: {selectedSongTitle}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="DrawerBody">{selectedSongText}</Drawer.Body>
        <Drawer.Footer>
          <Button onClick={handleCloseDrawer} appearance="primary">
            Zamknij
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};

export default AllSongs;
