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
                            </div>
                        }
                    </div>

                </div>

                <div class="col-sm-6">

                    Last Name
                    <div>
                        {lname}
                    </div>

                </div>

            </div>

            <div class="row mt-3">

                <div class="col-sm-6">

                    Email
                    <div>
                        {email}
                    </div>

                </div>

                <div class="col-sm-6">

                    Password
                    <div>
                        {password}
                    </div>

                </div>

            </div>

            <div class="row mt-3">

                <div class="col-sm-6">

                    Date of Birth
                    <div>
                        {dob}
                    </div>

                </div>

                <div class="col-sm-6">

                    Gender
                    <div>
                        {gender}
                    </div>

                </div>

            </div>


            <br/>
            <div className="row mt-3">

                <div className="col-6">

                </div>

                <div className="col-6">


                    { editing&&
                        <div>
                            <button className="btn btn-success"
                                    onClick={() => { setNewName('')
                                        return setEditing(false) }}
                            >Save</button>
                            &nbsp;
                            &nbsp;
                            <button className="btn btn-danger"
                                    onClick={() => { setEditing(false) }}
                            >Cancel</button>
                        </div>
                    }
                    {!editing&&
                    <button className="btn btn-primary"
                            onClick={() => { setNewName('')
                                return setEditing(true) }}
                    >Edit profile</button>
                    }
                </div>

            </div>

        </div>
    )

}
export default BasicInfo