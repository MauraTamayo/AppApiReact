import React, { useEffect, useState } from 'react';
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

/*   useEffect(() => {
    characters&&console.log(characters)
  }, [characters]) */

  return (
    <ContainerMUICards>
        {characters&&characters.map((elem,index)=>(
          <MUICard key={index} dataCard={elem}/>
        ))}
      </ContainerMUICards>
  );
}

export default Home;
