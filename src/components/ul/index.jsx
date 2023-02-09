import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContext";
import { H2Das, UlDas } from "../../style/dashboard/style";
import { GiSadCrab } from "react-icons/gi";
import { BsFillTrashFill } from "react-icons/bs";

const Ul = () => {
  const { techDelete, techs } = useContext(AuthContext);
  return (
    <>
      {techs?.length > 0 ? (
        <UlDas>
          {techs.map((tech) => (
            <li key={tech.id}>
              <h3>{tech.title}</h3>
              <div>
                <p>{tech.status}</p>
                <button onClick={() => techDelete(tech.id)}>
                  <BsFillTrashFill />
                </button>
              </div>
            </li>
          ))}
        </UlDas>
      ) : (
        <H2Das>
          Você ainda não possui nenhuma tecnologia <GiSadCrab />
        </H2Das>
      )}
    </>
  );
};

export default Ul;
