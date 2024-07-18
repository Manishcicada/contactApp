export function filterFavourite(data){
  const favourites = data.filter(item=> item.favourite);
  return favourites;
}

export function removeDataUtil(data, state){
  const newState = state.filter(entry=> entry.email!==data.email);
  return newState;
}

export function findIndexOfUser(data, state){
  const index = state.findIndex(value=> value.email === data.email);
  return index;
}