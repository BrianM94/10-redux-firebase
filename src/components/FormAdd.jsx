import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const dispatch = useDispatch();

  const [viewForm, setViewForm] = useState(false);

  const [sueldo, setSueldo] = useState({
    dineroHora: "",
    horas: "",
  });

  const { dineroHora, horas } = sueldo;

  const handleViewForm = () => {
    setViewForm(!viewForm);

    setSueldo({
      dineroHora: "",
      horas: "",
    });
  };

  const handleChange = (e) => {
    setSueldo({
      ...sueldo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (dineroHora === "" || horas === "") {
      return;
    }

    const sueldoFinal = dineroHora * horas;

    dispatch(crearRegistro(sueldoFinal));

    setSueldo({
      dineroHora: "",
      horas: "",
    });
  };

  return (
    <div>
      <button onClick={handleViewForm} className="btn green">
        {!viewForm ? (
          <i className="material-icons prefix">add_box AGREGAR</i>
        ) : (
          <i className="material-icons prefix">close CERRAR</i>
        )}
      </button>

      {viewForm && (
        <div className="animate__animated animate__slideInDown">
          <input
            type="number"
            placeholder="Ingrese Cantidad de Dinero por hora"
            value={dineroHora}
            onChange={handleChange}
            name="dineroHora"
          />

          <input
            type="number"
            placeholder="Ingrese Cantidad de Horas Trabajadas"
            value={horas}
            onChange={handleChange}
            name="horas"
          />

          <button onClick={handleAdd} className="btn blue">
            Calcular y Guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormAdd;
