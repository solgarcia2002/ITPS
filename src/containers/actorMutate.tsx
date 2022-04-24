import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import MovieList from "../components/movieList";
import { sortActors } from "../utils/lib";

interface MovieType {
  name: string;
  actors: string[];
}
const ActorMutate = () => {
  const valueRef = useRef<HTMLInputElement>();
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [modifiedMovieList, setModifiedMovieList] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const _response = await fetch("movies.json"); //simulates an API rest call
      const _data = await _response.json();
      setMovies(sortActors(_data.movies));
    };
    fetchMovies();
  }, []);

  const mutateActor = (originalMovies: MovieType[], actorToMutate: string) =>
    originalMovies.map((mov) => ({ ...mov, actors: [actorToMutate] }));

  const handleMutation = () => {
    setModifiedMovieList(mutateActor(movies, valueRef?.current?.value ?? ""));
  };
  return (
    <Box component="form" sx={{ minWidth: 275, float: "left" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Movies + Actors (3 & 4)
          </Typography>
          <TextField
            sx={{ ml: 1, flex: 1 }}
            placeholder="Ie.: Jhon Malcovich"
            label="Actor"
            inputRef={valueRef}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleMutation}
          >
            <SearchIcon />
          </IconButton>
        </CardContent>
      </Card>
      <Box sx={{ maxWidth: "45%", float: "left", margin: " 1rem" }}>
        <MovieList movies={movies} title="Movies" />
      </Box>
      <Box sx={{ maxWidth: "45%", float: "left", margin: " 1rem" }}>
        <MovieList movies={modifiedMovieList} title="Mutated Movies" />
      </Box>
    </Box>
  );
};
export default ActorMutate;
