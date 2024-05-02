import MoviesGallery from "./MoviesGallery";
import MyHeader from "./MyHeader";
const TvShows = () => {
  return (
    <>
      <MyHeader title="Tv Shows" />
      <MoviesGallery title="Star Wars Gallery" searchTitle="Star Wars" />
      <MoviesGallery title="Marvel Gallery" searchTitle="Marvel" />
      <MoviesGallery title="Harry Potter Gallery" searchTitle="Harry Potter" />
      <MoviesGallery title="The Lord Of The Rings Gallery" searchTitle="The Lord Of The Rings" />
      <MoviesGallery title="Pirates of the Caribbean Gallery" searchTitle="Pirates of the Caribbean" />
    </>
  );
};
export default TvShows;
