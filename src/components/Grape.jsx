import lemon from '../assets/kilpailu.svg'

function Lemon(props) {
  return (
    <div className="lemon">
      <img src={lemon} alt="lemon" onClick={props.onClick} />
    </div>
  );
}
  
export default Lemon;