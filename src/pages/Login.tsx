import { useRef } from "react"
import ButtonStandard from "../components/library/ButtonStandard"
import InputStandard from "../components/library/InputStandard"

const Login = () => {
    const passRef = useRef<HTMLInputElement>()
    const emailRef = useRef<HTMLInputElement>()
    return (
        <main className="flex justify-center items-center h-screen">
            <div>
                <div className="flex flex-col">
                    <label>Email Adresse</label>
                    <InputStandard type="email" reference={emailRef} />
                </div>
                <div className="flex flex-col">
                    <label>Passwort</label>
                    <InputStandard type="password" reference={passRef} />
                </div>
                <ButtonStandard label="Login" />
            </div>
        </main>
    )
}

export default Login