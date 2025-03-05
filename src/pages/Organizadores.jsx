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

import sheets from "../axios/axios";

function ListEvent() {
  const [organizadores, setOrganizadores] = useState([]);

  async function getOrganizador() {
    await sheets.getOrganizador().then(
      (response) => {
        console.log(response.data.organizadores);
        setOrganizadores(response.data.organizadores);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  const listOrganizadores = organizadores.map((evento) => {
    return (
      <TableRow key={evento.id_organizador}>
        <TableCell align="center">{evento.nome}</TableCell>
        <TableCell align="center">{evento.email}</TableCell>
        <TableCell align="center">{evento.telefone}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getOrganizador();
  }, []);

  return (
    <div>
      <h5>Lista de organizadores</h5>

      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table>
          <TableHead style={{ backgroundColor: "brown", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Telefone</TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{ margin: "2px" }}>
            {listOrganizadores}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListEvent;