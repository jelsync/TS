import { useCounter } from "../hooks/useCounter";
export const ContadorConHook = () => {
  const { sumar, contador } = useCounter(30);
  return (
    <>
      <h3>
        Contador con hook: <small>{contador}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => sumar(-1)}>
        -1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => sumar(1)}>
        +1
      </button>
    </>
  );
};
