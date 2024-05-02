import MoviesGallery from "./MoviesGallery";
import MyHeader from "./MyHeader";

const TvShows = () => {
  return (
    <>
      <MyHeader title="Home" />
      <MoviesGallery title="Tranding Now" searchTitle="Pokemon" />
      <MoviesGallery title="Watch Again" searchTitle="Digimon" />
      <MoviesGallery title="Old School" searchTitle="Naruto" />
    </>
  );
};
export default TvShows;
