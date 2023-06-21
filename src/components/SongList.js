import React from "react";
import { Button } from "rsuite";
import AngleDownIcon from "@rsuite/icons/legacy/AngleDown";

const SongList = ({ songs, handleExpandClick }) => {
  return (
    <div className="AllSongsContainer">
      <div className="AllSongsList">
        {songs.map((song) => (
          <div className="SongTile" key={song.id}>
            <h3 className="SongTitle">{song.title}</h3>
            <hr className="Divider" />
            <Button
              onClick={() => handleExpandClick(song.text, song.title)}
              appearance="primary"
              className="ExpandButton"
            >
              <AngleDownIcon />
              Rozwiń
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
