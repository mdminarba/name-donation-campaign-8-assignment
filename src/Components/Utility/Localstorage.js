const getStoredAddCard = () =>{
  const storedCard = localStorage.getItem('car-aplications');
  if(storedCard){
    return JSON.parse(storedCard)
  }
  return [];
}
const saveCardAdd = id =>{
const storedCards = getStoredAddCard();
const exists = storedCards.find(caId => caId === id );
if (!exists) {
  storedCards.push(id);
  localStorage.setItem('car-aplications',JSON.stringify(storedCards))
}
} 
export { getStoredAddCard, saveCardAdd}