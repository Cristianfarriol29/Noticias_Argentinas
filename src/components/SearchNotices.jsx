import { Container, Grid, Typography } from "@mui/material";

import Form from "./Form";

const SearchNotices = () => {
  return (
    <Container>
      <Typography align="center" marginY={15} component="h2" variant="h3">
        Selecciona el tema que mas te interese
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginY={15}
      >
        <Grid item md={6} xs={12}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchNotices;
