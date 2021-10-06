import React from "react";
import { useState } from "react";
import "./about.css";
const vacio = ({ email, asunto, consulta }) => {
  let formVacio = false;
  if (email == "" || asunto == "" || consulta == "") {
    formVacio = true;
  }
  return formVacio;
};
export default function About() {
  const [form, setForm] = useState({
    email: "",
    asunto: "",
    consulta: "",
    vacio: true,
  });
  const [errors, setErrors] = useState({
    email: "",
    asunto: "",
    consulta: "",
    err: false,
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      vacio: vacio(form),
    });
    setErrors({
      ...errors,

      vacio: vacio(form),
    });
  };
  return (
    <div className="containerAbout">
      <h2>Contacto</h2>
      <div className="about">
        <p>Abel Pedro Mendez Villagra</p>
        <p>Curso de React FI-UNJU</p>
        <p>abel.m.villagra@gmail.com</p>
      </div>
      <form className="containerAbout">
        <h3>Formulario de contacto</h3>
        <div>
          <label for="email"> Email: </label>
          <input
            onChange={(event) => handleChange(event)}
            id="email"
            type="email"
            name="email"
            className="input"
          />
        </div>
        <div>
          <label for="asunto"> Asunto: </label>
          <input
            onChange={(event) => handleChange(event)}
            id="asunto"
            type="text"
            name="asunto"
            className="input"
          />
        </div>
        <label id="consulta">Tu consulta</label>
        <textarea
          onChange={(event) => handleChange(event)}
          id="consulta"
          name="consulta"
          placeholder="Tu consulta ..."
          rows="10"
          cols="50"
        ></textarea>
        <button className="button" disabled={errors.err || form.vacio}>
          Enviar
        </button>
      </form>
    </div>
  );
}
