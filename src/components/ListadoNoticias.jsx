import React from "react";
import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Noticias de último momento en Argentina
      </Typography>

      <Grid container spacing={2}>
        {noticias.map((noticia) => {
          return <Noticia key={noticia.url} noticia={noticia} />;
        })}
      </Grid>
      <Stack
        sx={{ marginY: 5 }}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          count={totalPaginas}
          color="secondary"
          onChange={(e, page) => handleChangePagina(e, page)}
          page={pagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
