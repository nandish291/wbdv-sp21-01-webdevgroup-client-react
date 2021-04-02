import React, {useState, useEffect} from 'react'
import movieService from '../services/movies-service'
import {Link, useParams, useHistory} from "react-router-dom";
//
//
//
// <div className="vcc-sticky-nav-bar">
//     <div className="row">
//         <div className="col-1">
//                     <span className="navbar-text">
//                         <i className="fa fa-bars"></i>
//                     </span>
//         </div>
//         <div className="col-2 d-none d-sm-table-cell">
//                     <span className="navbar-text">
//                     Dashboard
//                     </span>
//         </div>
//         <div className="col-8">
//             <input className="form-control" placeholder="New Course Title"/>
//         </div>
//         <div className="col-1">
//                     <span className="navbar-text">
//                     <i className="fa fa-plus-circle"></i>
//                     </span>
//         </div>
//     </div>
// </div>
