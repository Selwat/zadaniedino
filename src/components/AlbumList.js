import React from "react";

const AlbumList = ({ albums, handleClick }) => {
  return (
    <>
      {albums.map((album) => (
        <div
          className="AlbumTile"
          key={album.id}
          onClick={() => handleClick(album.id)}
        >
          <h3 className="AlbumTitle">{album.title}</h3>
          <p className="AlbumInfo">
            Artysta: {album.artist ? album.artist.name : ""}
          </p>
          <p className="AlbumInfo">Rok wydania: {album.year}</p>
          <hr className="Divider" />
        </div>
      ))}
    </>
  );
};

export default AlbumList;
