import { useRouteError } from "react-router-dom"
import Wrapper from "../assets/styled-wrappers/ErrorWrapper";
import { NavLink } from "react-router-dom";
import { FaUserSecret, FaGrinBeamSweat, FaArrowLeft } from "react-icons/fa";

type RouterError = {
  status: number;
  message: string
}

const Error: React.FC = () => {

  const error: RouterError = useRouteError() as RouterError;
  return (
    <Wrapper>
      {
        error.status === 404
          ? (<div className="error-row-404">
            <FaUserSecret size={80} />
            <h2>Pagina no encontrada.</h2>
            <p>
              <NavLink to="/">
                <h4><FaArrowLeft /> Volver al inicio  </h4>
              </NavLink>
            </p>
          </div>)
          : (<div className="error-row-message">
            <FaGrinBeamSweat size={60} />
            <h2>Oopps, se ha presentado un error!!</h2>
            <NavLink to="/">
              <h4><FaArrowLeft /> Volver al inicio  </h4>
            </NavLink>
          </div>)
      }
    </Wrapper>
  )
}

export default Error