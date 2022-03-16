import { Link } from "react-router-dom"


function LoginBox() {

    return (
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
    )
}

export default LoginBox