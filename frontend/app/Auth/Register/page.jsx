'use client' 
import '../auth.scss'; 
import Link from 'next/link' 
 
const Register = () => { 
 
    function handleSubmit(event) { 
        event.preventDefault(); 
        // Handle form submission logic here 
      } 
  return ( 
    <div className="register-container"> 
      <form onSubmit={handleSubmit} className="register-form"> 
        <h2 className="register-heading">Register</h2> 
        <div className="input-group"> 
          <label htmlFor="username">Username</label> 
          <input type="text" id="username" name="username" required /> 
        </div> 
        <div className="input-group"> 
          <label htmlFor="email">Email</label> 
          <input type="email" id="email" name="email" required /> 
        </div> 
        <div className="input-group"> 
          <label htmlFor="password">Password</label> 
          <input type="password" id="password" name="password" required /> 
        </div> 
        <button type="submit" className="submit-button">Register</button> 
        <Link href="/Auth/Login">Have an account?</Link> 
      </form> 
    </div> 
  ); 
}; 
 
export default Register;