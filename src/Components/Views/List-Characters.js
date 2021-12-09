import React, { useState , useEffect} from 'react'
import apiRM from '../api/ApiFunctions'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Link } from '@material-ui/core';
import { styled } from '@mui/system';
import { Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';
// import { Link } from "react-router-dom";


function ListCharacters() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    apiRM.getCharacters().then(async res =>{
      const chars = res.data.results
      let toSave = []
      await chars.map(elem=>{
        toSave.push({
          title:elem.name,
          species:elem.species,
          origin:elem.origin.name,
          location:elem.location.name
        })
      })
      setData(toSave)
    })
  }, [])

  const HandelDelete = (index) =>{
    let arr = [...data]
    arr.splice(index,index)
    setData(arr)
  }

  const HandelWatch = (index) =>{

    
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
          {data.map((elem,index)=>(
            <TableRow key={index}>
              <TableCell><RemoveRedEyeSharpIcon onClick={() => HandelDelete(index)}/></TableCell>
              <TableCell>{elem.title}</TableCell>
              <TableCell>{elem.species}</TableCell>
              <TableCell>{elem.origin}</TableCell>
              <TableCell>{elem.location}</TableCell>
              <TableCell><DeleteIcon onClick={() => HandelDelete(index)}/><UpdateSharpIcon/>
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ListCharacters
