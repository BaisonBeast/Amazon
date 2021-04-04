import React, {useState} from 'react'
import "./css/Login.css"
import {Link, useHistory}  from "react-router-dom";
import {auth} from "./firebase"

function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	 const history = useHistory();

	function handleEmail(event){
		setEmail(event.target.value);
	}

	
	function handlePassword(event){
		setPassword(event.target.value);
	}


	function handleSignin(event){
		event.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
		  .then((userCredential) => {
		    history.push("/")
		  })
		  .catch((error) => {
		    alert(error.message)
		  });
	}


	function handleSignup(event){
		event.preventDefault();
		 auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

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
					<button onClick={handleSignin} type="submit" className="login_signin">Sign in</button>
				</form>
				<p >By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

				<button onClick={handleSignup} type="submit" className="login_signup">Add new account</button>
			</div>
			
		</div>
	)
}

export default Login