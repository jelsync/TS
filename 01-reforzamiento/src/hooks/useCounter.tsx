import { useState } from "react";

export const useCounter = (inicial: number = 5) => {
  const [contador, setContador] = useState(inicial);

  const sumar = (numero: number) => {
    setContador(contador + numero);
  };

  return {
    sumar,
    contador,
  };
};
