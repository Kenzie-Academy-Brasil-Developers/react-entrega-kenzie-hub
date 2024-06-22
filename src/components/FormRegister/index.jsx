import { Link } from "react-router-dom"

export const FormRegister = () => {
    return (
        <div>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">Cadastre-se</Link>
        </div>
    )
}