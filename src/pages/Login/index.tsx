import FormLogin from "../../components/formLogin";
import Logo from "../../img/Logo.svg";
import { Main, Header } from "../../style/form/style";

export default function mainLogin() {
  return (
    <Main>
      <Header>
        <figure>
          <img src={Logo} alt="Logo Kenzie Hub" />
        </figure>
      </Header>
      <FormLogin />
    </Main>
  );
}
