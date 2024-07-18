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

export function addToLocalStorage(data){
  const sendData = JSON.stringify(data)
  localStorage.setItem("contactData", sendData);
}

export function getFromLocalStorage(){
  const getData = localStorage.getItem("contactData");
  const data = JSON.parse(getData);
  return data;
}