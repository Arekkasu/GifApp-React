import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GiftExpertApp = () => {
  // Pensar en como puede almacenar un estado anterior
  // PROHIBIDO AHCER HOOKS DEPENDEN DE CONDICIONES
  const [categories, setCategories] = useState([]);

  const AddNewCategory = (event) => {
    if (categories.includes(event)) return;
    setCategories([event, ...categories]);
  };

  return (
    <>
      {/*GifExpertApp */}
      <h1>GiftExpert</h1>
      {/* INPUT*/}
      {/* <AddCategory onAddCategories={setCategories} />  NO RECOMENDAD*/}

      {/* Sera un callback esperando una propiedad y esta lo va manupulas
       Similar al event => state(event) */}
      <AddCategory onNewCategorie={(event) => AddNewCategory(event)} />

      {/* GRID*/}

      {/* Importante que los keys deben ser unicos */}
      {/* Al parecer en react al hacer interacciones y generar componen es importante tener en cuenta
          la key en el componente*/}

      {/* IMPORTANTE SI SE VA ITERAR ALGUN COMOPNENTE SE DEBE USAR PARENTESIS O SINO NO SE IMPRIME */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
