import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Form } from "../../style/form/style";
import { schemaRegister } from "../../validators/Validators";
import toast from "react-hot-toast";

export default function FormRegister() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });
  async function send(data) {
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
  }

  return (
    <Form onSubmit={handleSubmit(send)}>
      <span>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>
      </span>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
      </div>
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
      <div>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <input id="bio" placeholder="Fale sobre você" {...register("bio")} />
        <p>{errors.bio?.message}</p>
      </div>
      <div>
        <label htmlFor="contact">Contato</label>
        <input
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>
      </div>
      <div>
        <label htmlFor="course_module">Selecionar módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
        </select>
        <p>{errors.course_module?.message}</p>
      </div>
      <button type="submit">Cadastrar</button>
    </Form>
  );
}
