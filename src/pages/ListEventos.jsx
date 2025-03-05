import { useState, useEffect } from "react";
// Imports para criação de tabela
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

// TableHead é onde colocamos os titulos
import TableHead from "@mui/material/TableHead";

// TableBody é onde colocamos o conteúdo
import TableBody from "@mui/material/TableBody";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";

import sheets from "../axios/axios";

import { Link } from "react-router-dom";

function ListEvent() {
  const [eventos, setEventos] = useState([]);

  async function getEventos() {
    await sheets.getEventos().then(
      (response) => {
        console.log(response.data.events);
        setEventos(response.data.events);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  const listEventos = eventos.map((evento) => {
    return (
      <TableRow key={evento.id_evento}>
        <TableCell align="center">{evento.nome}</TableCell>
        <TableCell align="center">{evento.descricao}</TableCell>
        <TableCell align="center">{evento.data_hora}</TableCell>
        <TableCell align="center">{evento.local}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getEventos();
  }, []);

  return (
    <div>
      <h5>Lista de eventos</h5>

      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table>
          <TableHead style={{ backgroundColor: "brown", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Data e hora</TableCell>
              <TableCell align="center">Local</TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{ margin: "2px" }}>
            {listEventos}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        component={Link}
        to='/createvento'
        style={{width: '100%', backgroundColor: '#964b00'}}
      >
        Criar Evento
      </Button>
    </div>
  );
}

export default ListEvent;