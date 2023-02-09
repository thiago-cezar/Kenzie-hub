import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthContext";
import { Conteiner } from "../../style/modal";
import { schemaModal } from "../../schemas/Validators";
import { ITechRegister } from "../../Providers/AuthContext";

function Modal() {
  const { setOpenM, techRegister } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechRegister>({
    resolver: yupResolver(schemaModal),
  });

  return (
    <Conteiner>
      <div className="modal-box">
        <div className="headerM">
          <h2>Cadastrar Tecnologia</h2>
          <button className="close" onClick={() => setOpenM(false)}>
            X
          </button>
        </div>
        <form className="formM" onSubmit={handleSubmit(techRegister)}>
          <div>
            <label htmlFor="title">Nome</label>
            <input
              id="title"
              placeholder="Ex:Typescript"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
          </div>
          <div>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button className="buttonM" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </Conteiner>
  );
}
export default Modal;
