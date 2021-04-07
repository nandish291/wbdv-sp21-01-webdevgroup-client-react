import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Profile

const Profile = () => {

return (

<BrowserRouter>
<div>

<h1>Profile</h1>

<div class="row">

<div class="col-sm-2">
<i class="fas fa-bars fa-2x"></i>
</div>
<div class="col-sm-8">
<input type="text" class="col-sm-12" placeholder="Search" />
</div>
<div class="col-sm-2">
<Route path="/">Login/SignUp</Route>
</div>

</div>

</div>

</BrowserRouter>

)

}

export default Profile