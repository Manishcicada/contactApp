export function filterFavourite(data){
  const favourites = data.filter(item=> item.favourite);
  return favourites;
}