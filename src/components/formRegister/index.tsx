import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "../../style/form/style";
import { schemaRegister } from "../../schemas/Validators";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContext";
import { IUserRegister } from "../../Providers/AuthContext";

export default function FormRegister() {
  const { signRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schemaRegister),
  });
  type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }

  return (
    <Form onSubmit={handleSubmit(signRegister)}>
      <span>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa</p>
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
