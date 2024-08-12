const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div>
        <h1>Register</h1>
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label htmlFor="password1">Password</label>
            <input type="password" name="password1" />
          </div>
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2" />
          </div>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
