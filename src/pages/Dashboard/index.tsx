import { useContext } from "react";
import Logo from "../../img/Logo.svg";
import { Link } from "react-router-dom";
import { MainDas, SectionDate, SectionUser } from "../../style/dashboard/style";
import { AuthContext } from "../../Providers/AuthContext";
import Modal from "../../components/modal/Modal";
import Ul from "../../components/ul";

function Dashboard() {
  const { user, login, navigate, openM, setOpenM } = useContext(AuthContext);

  console.log(user);
  if (login) {
    navigate("/", { replace: true });
  }

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
        <h1>Olá, {user?.name}</h1>
        <p>{user?.course_module}</p>
      </SectionUser>
      <SectionDate>
        <h2>Tecnologias</h2>
        <button onClick={() => setOpenM(true)}>+</button>
      </SectionDate>
      <Ul />
      {openM && <Modal />}
    </MainDas>
  );
}
export default Dashboard;
