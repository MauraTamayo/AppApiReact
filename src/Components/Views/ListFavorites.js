import React, { useState , useEffect} from 'react'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';

export default function DataGridProDemo() {
  const [data, setData] = useState([])

  const getFavorites = async ()=> {
    let chars = JSON.parse(localStorage.getItem("favorites"))
      let toSave = []
      await chars?.map(elem=>{
        toSave.push({
          title:elem.title,
          species:elem.description,
          origin:"unknow",
          location:"unknow"
        })
      })
      setData(toSave)
  }
  
  useEffect(() => {
    getFavorites()
  }, [])

  const handleDeleteFavorite = (index) => {
    let chars = JSON.parse(localStorage.getItem("favorites"))
    if(chars.length === 1){
      localStorage.removeItem("favorites")
    }else{
      console.log(index)
      chars.splice(index,1)
      localStorage.setItem("favorites", JSON.stringify(chars))
    }
    return getFavorites()
  }

  return (
    <div>
      <h1>Personajes de Ricky y Morty</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ver</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Especies</TableCell>
              <TableCell>Origen</TableCell>
              <TableCell>Locación</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data?.map((elem,index)=>(
            <TableRow key={index}>
              <TableCell><RemoveRedEyeSharpIcon onClick={() => {}}/></TableCell>
              <TableCell>{elem.title}</TableCell>
              <TableCell>{elem.species}</TableCell>
              <TableCell>{elem.origin}</TableCell>
              <TableCell>{elem.location}</TableCell>
              <TableCell><DeleteIcon onClick={() =>handleDeleteFavorite(index)}/><UpdateSharpIcon/>
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
  );
}