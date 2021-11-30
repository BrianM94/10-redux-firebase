import React from "react";
import { useSelector } from "react-redux";

import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);

  const data = useSelector((state) => state.nomina.data);

  return (
    <>
      <Navbar />

      <div className="container animate__animated animate__backInLeft">
        <h1 className="center">Hola, Bienvenido {name}</h1>
        <hr />

        <FormAdd />

        <table className="highlight">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Sueldo</th>
              <th>Borrar</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elemento) => {
              return (
                <tr
                  className="animate__animated animate__fadeInUp"
                  key={elemento.id}
                >
                  <Table data={elemento} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
