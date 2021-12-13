import { useEffect, useReducer } from "react";

interface AuthState {
  valindando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}
const initialState: AuthState = {
  valindando: true,
  token: null,
  userName: "",
  nombre: "",
};

type AuthAction = { type: "logout" } | { type: "login"; payload: AuthState };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        valindando: false,
        token: null,
        nombre: "",
        userName: "",
      };
    case "login":
      const { valindando, token, nombre, userName } = action.payload;
      return {
        valindando,
        token,
        nombre,
        userName,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ valindando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "jelsyn",
        userName: "kakarotto",
        valindando: false,
        token: "123456",
      },
    });
  };

  const logOut = () => {
    dispatch({
      type: "logout",
    });
  };

  if (valindando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Valindando...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>
      {token ? (
        <>
          <button className="btn btn-danger" onClick={logOut}>
            Logout
          </button>
          <div className="alert alert-success">Autenticado como: {nombre} </div>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No Autenticado</div>
          <button className="btn btn-primary" onClick={() => login()}>
            Login
          </button>
        </>
      )}
    </>
  );
};
