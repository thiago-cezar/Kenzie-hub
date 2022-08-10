import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validators/Validators";
import { Form } from "../../style/form/style";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function FormLogin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  async function send(data) {
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
        navigate("/dasboard", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha invalidos", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
      });
  }

  return (
    <Form onSubmit={handleSubmit(send)}>
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
