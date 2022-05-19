import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

const Noticia = ({ noticia }) => {
  const { url, urlToImage, title, description, source } = noticia;

  return (
    <>
      {urlToImage !== null && urlToImage && (
        <Grid item md={6} lg={4}>
          <Card>
            <CardMedia
              component="img"
              alt={`Imagen de la noticia ${title}`}
              image={urlToImage}
              height={250}
            />

            <CardContent>
              <Typography variant="body1" color="error">
                {source.name}
              </Typography>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" component="div">
                {description}
              </Typography>
            </CardContent>

            <CardActions>
              <Link
                href={url}
                target="_blank"
                color="secondary"
                width={"100%"}
                textAlign="center"
                textTransform="uppercase"
                marginY={2}
                sx={{ textDecoration: "none" }}
              >
                Ir a la noticia
              </Link>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default Noticia;
