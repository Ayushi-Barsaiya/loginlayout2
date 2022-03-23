import { Link } from "react-router-dom"
import letter from "./Logos/letter.PNG"

function LoginBox() {

    return (
        <div class="card"><img id="letterLogo" src={letter} alt="" />
            <section id="container">
                <div><h4>Login to your account</h4>
                    <form>
                        <label for="emailPh">Email-Id / Phone number:</label>
                        <input type="text" name="emailPh" /><br /><br />
                        <label for="pass">Password:</label>
                        <input type="password" name="pass" /><br /><br />
                        <button><Link to="/students"> Submit </Link></button><br />
                        <Link to="/login"> Forget Password/Claim your Account</Link>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default LoginBox