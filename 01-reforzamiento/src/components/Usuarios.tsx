import { useEffect, useState } from "react";
import { reqResApi } from "../api/ReqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [dataUsers, setDataUsers] = useState<Usuario[]>([]);
  useEffect(() => {
    reqResApi
      .get<ReqResListado>("/users")
      .then((resp) => {
        setDataUsers(resp.data.data);
      })
      .catch(console.log);
  }, []);

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id}>
        <td>
          <img src={usuario.avatar} alt={usuario.first_name} style={{width:35, borderRadius:100}}/>
        </td>
        <td>{usuario.first_name}</td>
        <td>{usuario.email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Tabla de usarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
          {dataUsers.map(renderItem)}
          {/* {dataUsers.map((usuario) => renderItem(usuario))} */}
        </thead>
      </table>
    </>
  );
};
