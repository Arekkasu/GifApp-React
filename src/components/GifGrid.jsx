import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // LA LOGICA QUE SE USA DE HOOKS EN UNCOMPONENTE Y QUE SEA REUTILIZABLE SE DEBE USAR UN CUSTOM HOOK

  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {/*  SI HAY MUCHAS PROPS< PUEDO HACER {..PROPS} */}
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
