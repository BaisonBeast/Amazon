import React, {useState} from 'react'
import "./css/Login.css"
import {Link}  from "react-router-dom"

function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	function handleEmail(event){
		setEmail(event.target.value);
	}
	function handlePassword(event){
		setPassword(event.target.value);
	}
	function handleSignin(event){
		event.preventDefault();
	}
	function handleSignup(event){
		event.preventDefault();
	}

	return (
		<div className="login">
			<Link to="/">
				<img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" className="login_image"/>
			</Link>
			<div className="login_container">
				<h1>Sign-in</h1>

				<form>
					<h5>Email</h5>
					<input type="text" value={email} onChange={handleEmail}/>
					<h5>Password</h5>
					<input type="Password" value={password} onChange={handlePassword}/>
					<button onclick={handleSignin} className="login_signin">Sign in</button>
				</form>
				<p >By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

				<button onclick={handleSignup} className="login_signup">Add new account</button>
			</div>
			
		</div>
	)
}

export default Login