import {React, useState} from 'react';

const BasicInfo = ({fname, lname, email, password, dob, gender}) => {

const [editing, setEditing] = useState(false)
const [newName, setNewName] = useState(fname)

const saveName = () => {
        setEditing(false)
    }

return(
    <div class="container-fluid">

    <div class="row">

        <div class="col-sm-6">

        <div>
        First Name
        </div>

        <div>
        {
         !editing &&
         <div>
         {fname}
         <i onClick={() => { setNewName('')
                             return setEditing(true) }} class="fas fa-edit"></i>
         </div>
        }
        </div>

        <div>
        {
         editing &&
         <div>
         <input
           onChange={(event) => setNewName(event.target.value)}
           value={newName}
           placeholder={fname}
           className="form-control"/>

         <i onClick={() => saveName()} className="fas fa-check"></i>
         </div>
        }
        </div>

        </div>

        <div class="col-sm-6">

        Last Name
        <div>
         {lname}
         <i class="fas fa-edit"></i>
        </div>

        </div>

        </div>

        <div class="row mt-3">

            <div class="col-sm-6">

            Email
            <div>
             {email}
             <i class="fas fa-edit"></i>
            </div>

            </div>

            <div class="col-sm-6">

            Password
            <div>
             {password}
             <i class="fas fa-edit"></i>
            </div>

            </div>

        </div>

        <div class="row mt-3">

                <div class="col-sm-6">

                Date of Birth
                <div>
                 {dob}
                 <i class="fas fa-edit"></i>
                </div>

                </div>

                <div class="col-sm-6">

                Gender
                <div>
                 {gender}
                 <i class="fas fa-edit"></i>
                </div>

                </div>

        </div>

    </div>
)

}
export default BasicInfo