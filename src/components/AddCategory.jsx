import { useState } from "react";

export const AddCategory = ({ onNewCategorie }) => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // USESTATE TIENE EN SUS PROPIEDADES GUARDA LA DIRECCION DE LA VARIABLE DADA
    // POR LO QUE SI SE HACE UN CALLBACK SE OBTIENE EL VALOR QUE TIENE LA VARIABLE
    // EN ESTE CASO EL CATEGORY O MEJOR DICHO EL DE LA POSICION [0]
    if (inputValue.trim().length <= 1) return;
    // onAddCategories((category) => [inputValue, ...category]); No recomendada
    onNewCategorie(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      {" "}
      <input
        type="text"
        placeholder="Buscar Gif"
        onChange={onChange}
        value={inputValue}
      />{" "}
    </form>
  );
};
