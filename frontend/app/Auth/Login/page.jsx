import '../auth.scss'; 
import Link from 'next/link' 
 
const Login = () => { 
  return ( 
    <div className="login-container"> 
      <form className="login-form"> 
        <h2 className="login-heading">Login</h2> 
        <div className="input-group"> 
          <label htmlFor="email">Email</label> 
          <input type="email" id="email" name="email" required /> 
        </div> 
        <div className="input-group"> 
          <label htmlFor="password">Password</label> 
          <input type="password" id="password" name="password" required /> 
        </div> 
        <button type="submit" className="submit-button">Log In</button> 
        <Link href="/Auth/Register">Don't have an account?</Link> 
      </form> 
    </div> 
  ); 
}; 
 
export default Login;