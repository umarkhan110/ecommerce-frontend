import React from 'react'

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <div>
        <button onClick={google}>Login with Google</button>
    </div>
  )
}

export default Login