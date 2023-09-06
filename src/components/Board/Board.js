import MemoCard from '../MemoCard/MemoCard';
import './Board.css';

const Board = ({animating, handleMemoClick, memoCards}) => {
    return (
        <main className="board">
            {memoCards.map( (memoCard, i) => {
                return <MemoCard key={`${i}_${memoCard.item}`} animating={animating} handleMemoClick={handleMemoClick} memoCard={memoCard} />
            })}
        </main>
    );
}

export default Board;