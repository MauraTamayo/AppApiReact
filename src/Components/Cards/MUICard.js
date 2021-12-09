import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from 'styled-components'

const StyledCard = styled(Card)`
  margin: 0.3rem;
  margin-bottom: 1rem;
  max-width: 300px;
  width: 80%;
`;

function MUICard({ dataCard }) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={dataCard?.dir_image}
        alt={dataCard?.alt_image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dataCard?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dataCard?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </StyledCard>
  );
}

export default MUICard;
