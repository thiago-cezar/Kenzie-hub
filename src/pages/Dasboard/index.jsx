import { useState, useEffect } from "react";
import Logo from "../../img/Logo.svg";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { MainDas, Sectiondate, SectionUser } from "../../style/dasboard/style";

function Dasboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function dateUser() {
      const id = localStorage.getItem("@id");
      const date = await api.get(`/users/${id}`);
      return setUser(date);
    }
    dateUser();
  }, []);
  return (
    <MainDas>
      <header>
        <figure>
          <img src={Logo} alt="Logo da kenzie" />
        </figure>
        <Link onClick={() => localStorage.clear()} to="/">
          Sair
        </Link>
      </header>
      <SectionUser>
        <h1>Olá, {user?.data.name}</h1>
        <p>{user?.data.course_module}</p>
      </SectionUser>
      <Sectiondate>
        <h2>Que pena! Estamos em desenvolvimento :&#40;</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Sectiondate>
    </MainDas>
  );
}
export default Dasboard;
