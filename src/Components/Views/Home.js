import React, { useEffect, useState, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import MUICard from '../Cards/MUICard';
import apiRM from '../api/ApiFunctions'
import styled from 'styled-components'

const ContainerMUICards = styled.div`
  display: flex;
  justify-content: space-between;
  padding:1rem;
  flex-direction: row;
  flex-wrap: wrap;
`;

function Home() {
  const {favoriteList} = useContext(GlobalContext);
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    apiRM.getCharacters().then(async res =>{
      const chars = res.data.results
      let toSave = []
      await chars.map(elem=>{
        toSave.push({
          dir_image:elem.image,
          alt_image:elem.name,
          title:elem.name,
          description:elem.species
        })
      })
      setCharacters(toSave)
    })
  }, [])

  useEffect(() => {
  favoriteList&&console.log(favoriteList)
  }, [favoriteList])

  return (
    <ContainerMUICards>
        {characters&&characters.map((elem,index)=>(
          <MUICard key={index} dataCard={elem}  />
        ))}
      </ContainerMUICards>
  );
}

export default Home;
