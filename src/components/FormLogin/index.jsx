import { FormRegister } from "../FormRegister"

export const FormLogin = () => {
    return (
        <main>
            <form>
            <div>
                <label htmlFor="Email">E-mail</label>
                <input name="Email" id="email-login" type="email" />
            </div>

            <div>
                <label htmlFor="Password">Password</label>
                <input name="Password" id="password-login" type="password" />
            </div>

            <button>Entrar</button>
        </form>
        <FormRegister/>
        </main>
        
    )
}