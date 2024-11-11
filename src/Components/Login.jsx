import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Login = () => {
        // login korar jonno context kore data antesi

        const {loginUser,signInWithGoogle} = useContext(AuthContext);
      const navigate = useNavigate();

//    login handler
const handleLogin = (event) =>{
    event.preventDefault(); //eta page jeno reload naa hoe tar jonno dewa
    const email = event.target.email.value;
    const password = event.target.password.value;

    // login user 
    loginUser(email,password)
    .then((result) => {
        console.log(result.user)
        event.target.reset();  //jokhon  login complete hoe jabe email password field clean hoe jabe 
        navigate('/')  //jokhon signin successful hobe tokhon amaake sathe sathe home page e niye jabe
    })
    .catch(error => {
        console.log('error ashce', error)
    })
}

// google diye sign in kora 

const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
        console.log(result);
        navigate('/')
    })
    .catch(error => {
        console.log('error ashce',  error.message)
    })
}


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered " name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="ml-4 mb-4">New to this website? Please <Link to= "/register" className="underline">Sign Up</Link></p>
      <p>
        <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
      </p>
    </div>
  </div>
</div>
    );
};

export default Login;