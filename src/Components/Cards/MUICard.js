import React , {useContext} from "react";
import GlobalContext from "../../Context/GlobalContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from 'styled-components'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

const StyledCard = styled(Card)`
  margin: 0.3rem;
  margin-bottom: 1rem;
  max-width: 300px;
  width: 80%;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .title{
    margin: 0;
  }
  .heartButton{
    transition: all .2s;
    :hover{
      color: #d57d84;
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`

function MUICard({dataCard}) {
  const {setFavoriteList, favoriteList} = useContext(GlobalContext);

//  console.log(setFavoriteList)
//  console.log(favoriteList)

  const MostrarInfo = () => {
    let localFavorites = localStorage.getItem("favorites")
    localFavorites ? localFavorites = JSON.parse(localFavorites) : localFavorites = []
    localFavorites.push(dataCard)
    localStorage.setItem("favorites", JSON.stringify(localFavorites))
  }

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={dataCard?.dir_image}
        alt={dataCard?.alt_image}
      />
      <CardContent>
        <StyledTitleContainer>
          <Typography gutterBottom variant="h5" component="div" className="title">
            {dataCard?.title}
          </Typography>
          <FavoriteSharpIcon onClick={MostrarInfo} className="heartButton"/>
        </StyledTitleContainer>        
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
