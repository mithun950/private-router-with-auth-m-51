import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Register = () => {

    const navigate = useNavigate()

// context diye data access kortesi

const {createUser} = useContext(AuthContext)







  // register handler
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    

    // createUser 
    createUser(email,password)
    .then((result) => {
        console.log(result.user)
        event.target.reset();
        navigate('/') //signup kora shesh hole shora shori home page e chole jabe
    })
    .catch(error => {
        console.log('error ashce', error)
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-10">
          <form onSubmit={handleRegister} className="card-body px-6">
           
           
              {/* name input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
               </div>


               {/* email input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>

            {/* password input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered "
                name="password"
                required
              />

              {/* trams and condition checkbox */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox"  className="checkbox" />
                  <span className="label-text">Remember me</span>
                  
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <p className="ml-4 mb-4">
            Already Sign up this website? Please 

                  <Link to="/login" className="underline">
               Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
