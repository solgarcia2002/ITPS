import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { calcSquare } from "../utils/lib";

const SquareCalc = () => {
  const valueRef = useRef<HTMLInputElement>();
  const [squares, setSquares] = useState<number[]>([]);

  const handleCalc = () => {
    const _numbersList = valueRef?.current?.value.split(",");
    const _squareList = calcSquare(
      _numbersList?.map((num) => Number.parseInt(num)) ?? []
    );
    setSquares(_squareList);
  };
  return (
    <Box component="form" sx={{ minWidth: 275, float: "left" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Square Calculator (1)
          </Typography>
          <TextField
            sx={{ ml: 1, flex: 1 }}
            placeholder="Ie.: 2, 3, 4 ,8"
            label="Insert a list of numbers to get the square of each one"
            inputRef={valueRef}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleCalc}
          >
            <SearchIcon />
          </IconButton>
        </CardContent>
      </Card>
      <Box
        sx={{
          maxWidth: "100%",
          margin: " 1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ display: "inline" }}
          color="text.primary"
          variant="h5"
          paragraph
        >
          Squares
        </Typography>
        {squares.join(", ")}
      </Box>
    </Box>
  );
};
export default SquareCalc;
