import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../schemas/Validators";
import { Form } from "../../style/form/style";
import { useContext } from "react";
import { AuthContext, IUserLogin } from "../../Providers/AuthContext";

function FormLogin() {
  const { signIn, api, setUser, navigate, token } = useContext(AuthContext);
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api.get<any>(`/profile`).then((data) => {
      setUser(data.data);
      navigate("/dashboard", { replace: true });
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <Form onSubmit={handleSubmit(signIn)}>
      <span>
        <h1>Login</h1>
      </span>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>
      <button type="submit">Entrar</button>
      <span>
        <p>Ainda não possui uma conta?</p>
        <Link to="/Register">Cadastre-se</Link>
      </span>
    </Form>
  );
}
export default FormLogin;
