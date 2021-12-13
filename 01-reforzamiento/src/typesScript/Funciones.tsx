export const Funciones = () => {
    const sumar = (n1:number, n2:number):number => {
        const suma = n1 + n2;
        return suma;
    }
    
    return (
        <>
            <h2>Funciones</h2>
            <span>El resultado de sumar es: {sumar(5,4)}</span>
        </>
    )
}
