import { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(10);

  const sumar = (numero: number) => {
    setContador(contador + numero);
  };

  return (
    <>
      <h3>
        Contador: <small>{contador}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => sumar(-1)}>-1</button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => sumar(1)}>
        +1
      </button>
    </>
  );
};
