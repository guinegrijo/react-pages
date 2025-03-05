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

function Ingresso() {
  const [Ingressos, setIngressos] = useState([]);

  async function getAllIngresso() {
    await sheets.getAllIngresso().then(
      (response) => {
        console.log(response.data.events);
        setIngressos(response.data.events);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  const listIngresso = Ingressos.map((evento) => {
    return (
      <TableRow key={evento.id_ingresso}>
        <TableCell align="center">{evento.preco}</TableCell>
        <TableCell align="center">{evento.tipo}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getAllIngresso();
  }, []);

  return (
    <div>
      <h5>Lista de Ingressos</h5>

      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table>
          <TableHead style={{ backgroundColor: "brown", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Tipo</TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{ margin: "2px" }}>
            {listIngresso}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Ingresso;