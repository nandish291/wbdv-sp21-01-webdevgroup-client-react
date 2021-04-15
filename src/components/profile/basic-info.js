import {React, useState} from 'react';

const BasicInfo = ({fname, lname, email, password, dob, gender}) => {

    const [editing, setEditing] = useState(false)
    const [newfName, setNewfName] = useState(fname)
    const [newlName, setNewlName] = useState(lname)
    const [newEmail, setNewEmail] = useState(email)
    const [newPassword, setNewPassword] = useState(password)
    const [newDOB, setNewDOB] = useState(dob)
    const [newGender, setNewGender] = useState(gender)

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
                                    onChange={(event) => setNewfName(event.target.value)}
                                    value={newfName}
                                    placeholder={fname}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

                <div class="col-sm-6">

                    Last Name

                    { !editing &&
                        <div>
                            {lname}
                        </div>
                    }

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(event) => setNewlName(event.target.value)}
                                    value={newlName}
                                    placeholder={lname}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

            </div>

            <div class="row mt-3">

                <div class="col-sm-6">

                    Email

                    { !editing &&
                        <div>
                            {email}
                        </div>
                    }

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(event) => setNewEmail(event.target.value)}
                                    value={newEmail}
                                    placeholder={email}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

                <div class="col-sm-6">

                    Password

                    { !editing &&
                        <div>
                            {password}
                        </div>
                    }

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(event) => setNewPassword(event.target.value)}
                                    value={newPassword}
                                    placeholder={password}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

            </div>

            <div class="row mt-3">

                <div class="col-sm-6">

                    Date of Birth

                    { !editing &&
                        <div>
                            {dob}
                        </div>
                    }

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(event) => setNewDOB(event.target.value)}
                                    value={newDOB}
                                    placeholder={dob}
                                    className="form-control"/>
                            </div>
                        }
                    </div>


                </div>

                <div class="col-sm-6">

                    Gender

                    { !editing &&
                        <div>
                            {gender}
                        </div>
                    }

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(event) => setNewGender(event.target.value)}
                                    value={newGender}
                                    placeholder={gender}
                                    className="form-control"/>
                            </div>
                        }
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
                                onClick={() => { setNewfName('')
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
                            onClick={() => { setNewfName('')
                                return setEditing(true) }}
                    >Edit profile</button>
                    }
                </div>

            </div>

        </div>
    )

}
export default BasicInfo