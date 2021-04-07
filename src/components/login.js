import React from 'react';

const Login = () =>
{
 return(

<form>
  <div class="form-group row mt-5">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control col-sm-8" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control col-sm-8" id="inputPassword3" placeholder="Password" />
    </div>
  </div>


  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>

  <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
  </div>
</form>

 )
}

export default Login