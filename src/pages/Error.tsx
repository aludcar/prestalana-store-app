import { useRouteError } from "react-router-dom"

type RouterError = {
  status: number;
  message: string
}

const Error: React.FC = () => {

  const error: RouterError = useRouteError() as RouterError;
  return (
    <main>
      {
        error.status === 404 ? (<h4>Pagina no encontrada</h4>) : (<h4>Oopps, se ha presentado un error!!</h4>)
      }
    </main>
  )
}

export default Error