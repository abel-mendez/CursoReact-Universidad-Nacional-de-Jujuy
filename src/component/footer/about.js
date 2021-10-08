import React from "react";
import { useState } from "react";
import "./about.css";
const vacio = ({ email, asunto, consulta }) => {
  let formVacio = false;
  if (email === "" || asunto === "" || consulta === "") {
    formVacio = true;
  }
  return formVacio;
};
const validar = (event, error) => {
  let value = event.target.value;
  let name = event.target.name;
  if (value === "") {
    error = {
      ...error,
      [name]: "Este campo no puede estar vacio",
    };
  } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
    error = {
      ...error,
      [name]: "Debe ingresar un mail valido",
    };
  } else if (name === "asunto" && value.length < 10) {
    error = {
      ...error,
      [name]: "Debe ingresar al menos 10 caracteres",
    };
  } else if (name === "consulta" && value.length > 256) {
    error = {
      ...error,
      [name]: "Debe ingresar menos de 256 caracteres",
    };
  } else {
    error = {
      ...error,
      [name]: "",
    };
  }
  let errores = true;
  if (error.email === "" && error.asunto === "" && error.consulta === "") {
    errores = false;
  }
  error = {
    ...error,
    err: errores,
  };
  return error;
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
    setErrors(validar(event, errors));
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
          {errors.email}
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
          {errors.asunto}
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
        {errors.consulta}
        <button className="button" disabled={errors.err || form.vacio}>
          Enviar
        </button>
        {console.log(errors)}
      </form>
    </div>
  );
}
