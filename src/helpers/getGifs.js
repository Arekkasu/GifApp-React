export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=OjFv2bjrFAzAe31NfHoPXezrLY6HY6qu&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const resp = await fetch(url);

  const { data = [] } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,

    url: img.images.original?.webp,
  }));
  return gifs;
};
