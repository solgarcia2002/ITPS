import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { sumCounts } from "../utils/lib";

const SumCounters = () => {
  const valueRef = useRef<HTMLInputElement>();
  const [total, setTotal] = useState<number>(0);

  const handleCalc = () => {
    const _numbersList = valueRef?.current?.value.split(",") ?? [];
    const _counts = _numbersList.map((num) => ({
      count: isNaN(Number.parseInt(num)) ? 0 : Number.parseInt(num),
    }));

    const _total = sumCounts(_counts);
    setTotal(_total);
  };
  return (
    <Box component="form" sx={{ minWidth: 275, float: "left" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Counters addition (2)
          </Typography>
          <TextField
            sx={{ ml: 1, flex: 1 }}
            placeholder="Ie.: 2, 3, 4 ,8"
            label="Insert a list of counts to get the total"
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
          Total
        </Typography>
        {total}
      </Box>
    </Box>
  );
};
export default SumCounters;
