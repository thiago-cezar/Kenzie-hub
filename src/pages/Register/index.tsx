import { Link } from "react-router-dom";
import FormRegister from "../../components/formRegister";
import { Main, Header } from "../../style/form/style";
import Logo from "../../img/Logo.svg";

export default function Register() {
  return (
    <Main>
      <Header>
        <figure>
          <img src={Logo} alt="Logo Kenzie Hub" />
        </figure>
        <Link to="/">Voltar</Link>
      </Header>
      <FormRegister />
    </Main>
  );
}
