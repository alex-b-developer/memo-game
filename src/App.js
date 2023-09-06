import './App.css';
import { useState, useEffect } from 'react';
import Board from './components/Board/Board'

//const itemList = ['A','B','C','D','E','F','G','H']; 
//const itemList = [...'💣🧤🎩🌮🎱🌶🍕🦖'];
//const itemList = [...'✈✿☂♞☻♠♫♛'];
const itemList = [...'12345678'];

const App = () => {
  const [memoCards, setMemoCards] = useState([]); //Estado de las cartas, array de objetos.
  const [selectedMemoCard, setSelectedMemoCard] = useState(null); //Estado de la carta seleccionada, objeto.
  const [animating, setAnimating] = useState(false); //Cuando la animación esta activa, booleano.

  useEffect( () => {
    //Obtiene la lista de items(Elementos), los duplica y los organiza de forma aleatoria
    const randomItemList = randomizeArray([...itemList, ...itemList]);
    //Agrega la lista aleatoria al Estado memoCards[] en Array de Objetos con index, item y flipped
    setMemoCards(randomItemList.map( (item, i) => ({ index: i, item, flipped: false}) ));
  }, []);

  //Función que recibe un array y lo devuelve en desorden
  const randomizeArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  //LÓGICA CUANDO SE HACE CLICK EN LA CARTA

  const handleMemoClick = memoCard => {

    const flippedMemoCard = { ...memoCard, flipped: true }; //Crea constante con la memoCard Flipeada 
    let memoCardsCopy = [...memoCards]; //copia de lista de tarjetas

  //Reemplaza la tarjeta seleccionada con la tarjeta que ha dado vuelta. Con Splice
    memoCardsCopy.splice(memoCard.index, 1, flippedMemoCard);
  
  // Actualiza la lista de memocard con la de los elementos flipeados
    setMemoCards(memoCardsCopy);

  //casos
    if(selectedMemoCard === null) {
      setSelectedMemoCard(memoCard);

    } else if(selectedMemoCard.item === memoCard.item) {
      setSelectedMemoCard(null);

    } else {
      setAnimating(true);
      setTimeout(() => {
        //reemplaza, devuelve las tarjetas
        memoCardsCopy.splice(memoCard.index, 1, memoCard);
        memoCardsCopy.splice(selectedMemoCard.index, 1, selectedMemoCard);
        //asigna 
        setMemoCards(memoCardsCopy);
        setSelectedMemoCard(null);
        setAnimating(false);
      }, 1000);
    }
  }

  return (
    <Board memoCards={memoCards} animating={animating}  handleMemoClick={handleMemoClick} />
  );
}

export default App;
