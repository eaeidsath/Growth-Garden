import {useState} from 'react'; 

function LogIn(){
    const [signInFormData, setSignInFormData] = useState({
        signInEmail: "",
        signInPassword: ""
      });
    
      const [signUpFormData, setSignUpFormData] = useState({
        signUpEmail: "",
        signUpPassword: ""
      });
    
      const handleSignInChange = (event) => {
        const { name, value } = event.target;
        setSignInFormData({ ...signInFormData, [name]: value });
      };
    
      const handleSignUpChange = (event) => {
        const { name, value } = event.target;
        setSignUpFormData({ ...signUpFormData, [name]: value });
      };
    
      const handleSignInSubmit = (event) => {
        event.preventDefault();
        // Add sign-in logic here
        console.log("Sign In Form Data:", signInFormData);
      };
    
      const handleSignUpSubmit = (event) => {
        event.preventDefault();
        // Add sign-up logic here
        console.log("Sign Up Form Data:", signUpFormData);
      };
    
      return (
        <div className="signin-signup-container">
          <form className="signin-form" onSubmit={handleSignInSubmit}>
            <h2>Sign In</h2>
            <input
              type="email"
              name="signInEmail"
              placeholder="Email"
              value={signInFormData.signInEmail}
              onChange={handleSignInChange}
              required
            />
            <input
              type="password"
              name="signInPassword"
              placeholder="Password"
              value={signInFormData.signInPassword}
              onChange={handleSignInChange}
              required
            />
            <button type="submit">Sign In</button>
          </form>
    
          <form className="signup-form" onSubmit={handleSignUpSubmit}>
            <h2>Sign Up</h2>
            <input
              type="email"
              name="signUpEmail"
              placeholder="Email"
              value={signUpFormData.signUpEmail}
              onChange={handleSignUpChange}
              required
            />
            <input
              type="password"
              name="signUpPassword"
              placeholder="Password"
              value={signUpFormData.signUpPassword}
              onChange={handleSignUpChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
}

export default LogIn;