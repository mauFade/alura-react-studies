import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        alert("TROLEI DE NOVO");
      }}
    >
      <div>
        <label htmlFor="task">Escolha um assunto</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Assunto"
          required
        />
      </div>

      <div>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button type="submit" />
    </form>
  );
};

export default Form;
