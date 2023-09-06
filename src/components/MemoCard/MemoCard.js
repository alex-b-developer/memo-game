import './MemoCard.css';

const MemoCard = ({animating, handleMemoClick, memoCard}) => (
    <div className="memo-card" onClick={() => (!memoCard.flipped && !animating) && handleMemoClick(memoCard)}>
        <div className={`memo-card-inner ${memoCard.flipped && 'memo-card-flipped'}`}>
            <div className="memo-card-front">
            </div>
            <div className="memo-card-back">
                {memoCard.item}
            </div>
        </div>
    </div>
)

export default MemoCard;