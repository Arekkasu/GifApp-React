// La idea de los custom hooks es hacer la logica de los hooks de un componente y poder reutilizarlo
// en otros componentes sin tener que hacer la misma logica en cada uno de ellos, ademas tambien se hace
// si la logica es muy compleja y se quiere separar en otro archivo para que sea mas facil de leer

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  // haciendo simbolo que esta cargando

  const [isLoading, setIsLoading] = useState(true);

  //EL USEEFFECT NO PUEDE TENER ASYNCRONIA
  // AUQNUE PUEDE SER UNA FUNCION EXTERNA ASYNCRONA
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(
    () => {
      getImages();
    },
    // ESTOS SON COMO LAS DEPENDENCIAS PARA QUE SE ACTIVE EL EFEFCT, SIEMPRE ES UN USESTATE COMO DEPENDENCIA
    [],
  );

  return {
    images,
    isLoading,
  };
};
