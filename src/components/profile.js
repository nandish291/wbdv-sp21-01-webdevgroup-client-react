import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './profile-style.css'
import BasicInfo from './basic-info.js'
import Media from './media.js'
import Event from './event.js'

//Profile

const Profile = ({imgPath, events, media}) => {

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

<div class="row mt-3">

<div class="col-sm-4 profile">

<div>
<img src={imgPath} class="profile-pic" />
</div>

<div class="mt-3">
<button type="button" class="btn btn-primary">Edit Profile</button>
</div>

</div>

<div class="col-sm-8">

<div class="row">

<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Basic Info</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Media</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">My Events</a>
  </li>
</ul>

</div>

<div class="row mt-3">

<BasicInfo fname={"Shaili"}
           lname={"Gandhi"}
           email={"abd@gmail.com"}
           password={"123456"}
           dob={"2/23/1992"}
           gender={"male"} />

{
/*
<Media pictures = {media} />

<Event events = {events} />
*/
}

</div>

</div>

</div>

</div>

</BrowserRouter>

)

}

export default Profile