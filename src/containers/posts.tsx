import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const [firstPostId, setFirstPostId] = useState<number>();
  const [titleWithE, setTitleWithE] = useState<string>("undefined");

  useEffect(() => {
    const fetchPosts = async () => {
      const _response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const _data = await _response.json();
      setFirstPostId(_data.find((d: PostType) => d.userId === 7).id);
      setTitleWithE(_data.find((d: PostType) => d.title.startsWith("e")).title);
    };
    try {
      fetchPosts();
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <Box
      component="form"
      sx={{ minWidth: 275, maxWidth: "20%", float: "left" }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Posts (5)
          </Typography>
          <Typography variant="body1" gutterBottom>
            First Post ID for UserID 7: {firstPostId}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Title Starting With "e": {titleWithE}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Posts;
