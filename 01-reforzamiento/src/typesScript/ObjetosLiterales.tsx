interface Persona {
  nombre: String;
  direccion: Direccion;
}

interface Direccion {
  ciudad: String;
  municipio: String;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "jelsyn",
    direccion: {
      ciudad: "Tegucigalpa",
      municipio: "Disitrito central",
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
