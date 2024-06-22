import { Link } from "react-router-dom"
import { Header } from "../../components/Header"

export const RegisterPage = () => {

    return (
        <main>
            <div>
                <Header/>
                <Link to="/">Voltar</Link>
            </div>
            <form>
                <h1>Crie sua conta</h1>
                <span>Rápido e grátis, vamos nessa</span>
                <div>
                    <label htmlFor="Name">Nome</label>
                    <input name="Name" id="name-register" type="text" />
                </div>
                <div>
                    <label htmlFor="Email">E-mail</label>
                    <input name="Email" id="email-register" type="email" />
                </div>
                <div>
                    <label htmlFor="Password">Senha</label>
                    <input name="Password" id="password-register" type="password" />
                </div>
                <div>
                    <label htmlFor="PassworConfirm">Confirm Senha</label>
                    <input name="PasswordConfirm" id="password-confirm-register" type="password" />
                </div>
                <div>
                    <label htmlFor="Bio">Bio</label>
                    <input name="Bio" id="bio" type="text" />
                </div>
                <div>
                    <label htmlFor="Contact">Contato</label>
                    <input name="Contact" id="contact-register" type="text" />
                </div>
                <select name="" id="">
                    Selecione módulo
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <Link>Cadastrar</Link>
            </form>
        </main>
    )
}