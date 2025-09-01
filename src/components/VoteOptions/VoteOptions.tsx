import css from "./VoteOptions.module.css"
import type { VoteType } from '../../types/votes';

interface VoteOprionsProps{
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions=({ onVote, onReset, canReset }: VoteOprionsProps)=>{
  return  (<div className={css.container}>

  <button 
    className={css.button}
    type="button"
    onClick={()=>onVote('good')}
  >Good</button>

  <button 
  className={css.button}
  type="button"
  onClick={()=>onVote('neutral')}
  >Neutral</button>

  <button 
  className={css.button}
  type="button"
  onClick={()=>onVote('bad')}
  >Bad</button>

   {canReset && (
        <button
          type="button"
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}

</div>
  )
}
export default VoteOptions