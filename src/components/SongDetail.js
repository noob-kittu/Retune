import "./SongDetail.css";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongDetail = ({
  selectedSongId = -1,
  defaultSong,
  selectSong,
  songs,
}) => {
  const songData = () => {
    if (selectedSongId >= 0) {
      return (
        <>
          <div className="now-playing">
            <div id="active">
            <div className="waviy">
                <span>Now Playing</span>
              </div>
            </div>
          </div>
          <div className="album-img">
            {/* <img
              src={songs[selectedSongId].links.images[1].url}
              alt={songs[selectedSongId].name}
            /> */}
          </div>
          <div className="artist-img">
            <img className="artist"
              src={songs[selectedSongId].links.images[0].url}
              alt={songs[selectedSongId].author}
            />
            <div className="header">
              <h3>{songs[selectedSongId].name}</h3>
              <p className="artist-name">{songs[selectedSongId].author}</p>
            </div>


          </div>
        </>
      );
    } else {
      selectSong(defaultSong);
      return null;
    }
  };

  return (
    <div
      className="song-detail"
      style={{
        backgroundImage: `url(
          ${songs[selectedSongId].links.images[1].url}
        )`,
      }}
    >
      {songData()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongDetail);
