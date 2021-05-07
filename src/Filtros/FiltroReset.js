export default function FiltroReset(props) {
  return (
    <div>
      <button onClick={props.Resetear} value={props.reset} className="btn">
        Resetear filtros
      </button>
    </div>
  );
}
