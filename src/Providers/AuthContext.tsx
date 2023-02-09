import { AxiosInstance } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../services/api";

interface IChildrenProps {
  children: ReactNode;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  name: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface ITechRegister {
  title: string;
  status: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  avatar_url: string;
  techs: ITech[];
  created_at: Date;
  updated_at: Date;
}

interface IAuthContext {
  user: IUser;
  signIn: (data: IUserLogin) => Promise<void>;
  signRegister: (data: IUserRegister) => Promise<void>;
  api: AxiosInstance;
  token: string | null;
  login: boolean;
  navigate: NavigateFunction;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  openM: boolean;
  setOpenM: React.Dispatch<React.SetStateAction<boolean>>;
  techRegister: (data: ITechRegister) => Promise<void>;
  techDelete: (id: string) => Promise<void>;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setTechs: React.Dispatch<React.SetStateAction<ITech[]>>;
  techs: ITech[];
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const token = localStorage.getItem("@token");
  const [openM, setOpenM] = useState(false);
  const [techs, setTechs] = useState<ITech[]>([] as ITech[]);

  const signIn = async (data: IUserLogin) => {
    await api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("@token", res.data.token);
        localStorage.setItem("@id", res.data.user.id);
        toast.success("Bem vindo!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
      });
  };

  const signRegister = async (data: IUserRegister) => {
    await api
      .post("/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        navigate("/", { replace: true });
      })
      .catch((err) =>
        toast.error("Ops! Algo deu errado", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        })
      );
  };

  const techRegister = async (data: ITechRegister) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api
      .post("/users/techs", data)
      .then((res) => {
        toast.success("Tecnologia adicionada com sucesso", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        setTechs([...techs, res.data]);
        setOpenM(false);
      })
      .catch((err) =>
        toast.error("Tecnologia já existente", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        })
      );
  };
  const techDelete = async (id: string) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api
      .delete(`/users/techs/${id}`)
      .then((res) => {
        toast.success("Tecnologia deletada com sucesso", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        setTechs((old) => old.filter((elem) => elem.id !== id));
      })
      .catch((err) =>
        toast.error("Erro", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        })
      );
  };

  useEffect(() => {
    async function dateUser() {
      if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get<any>("/profile");
        setLogin(false);
        setTechs(data.techs);
        setUser(data);
      } else {
        !user && setLogin(true);
        localStorage.clear();
      }
    }
    dateUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signRegister,
        user,
        api,
        setUser,
        navigate,
        token,
        login,
        openM,
        setOpenM,
        techRegister,
        techDelete,
        setLogin,
        setTechs,
        techs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
