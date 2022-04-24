import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { findByLabelText } from "@testing-library/react";

interface MovieType {
  name: string;
  actors: string[];
}
interface MovieListType {
  movies: MovieType[];
  title: string;
}
const MovieList = ({ movies, title }: MovieListType) => (
  <React.Fragment>
    <Typography sx={{ display: "inline" }} color="text.primary" variant="h5">
      {title}
    </Typography>
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {movies.map((movie, key) => (
        <React.Fragment key={`${movie.name}-${key}`}>
          <ListItem alignItems="flex-start" sx={{ flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{ width: "100%", fontWeight: "bold" }}
            >
              {movie.name}
            </Typography>
            <Typography component="span" variant="body2" color="text.primary">
              Actors :
            </Typography>
            <List>
              {movie.actors.map((actor) => (
                <ListItem
                  alignItems="flex-start"
                  key={`${actor}-${movie.name}`}
                >
                  {actor}
                </ListItem>
              ))}
            </List>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  </React.Fragment>
);
export default MovieList;
