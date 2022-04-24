import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ActorMutate from "./containers/actorMutate";
import SquareCalc from "./components/squareCalc";
import SumCounters from "./components/sumCounters";
import Posts from "./containers/posts";
function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="linkedin"
            href="https://www.linkedin.com/in/javascriptninja/"
            target="_blank"
            sx={{ mr: 2 }}
          >
            <LinkedInIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sol Garcia - Test Challenge ;)
          </Typography>
        </Toolbar>
      </AppBar>
      <SquareCalc />
      <SumCounters />
      <ActorMutate />
      <Posts />
    </Box>
  );
}

export default App;
