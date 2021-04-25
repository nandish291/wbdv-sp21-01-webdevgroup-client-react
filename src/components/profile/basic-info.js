import {React, useState} from 'react';
import {Typography} from "@material-ui/core";

const BasicInfo = ({user,updateUser,anonymous}) => {

    const [cachedItem, setCahedItem] = useState(user)
    const [editing, setEditing] = useState(false)

    const saveName = () => {
        setEditing(false)
    }

    return(
        <div className="container-fluid">

            <div className="row">

                <div className="col-sm">

                    <div>
                        <Typography>First Name</Typography>
                    </div>

                    <div>
                        {
                            !editing &&
                            <div>
                                {user.firstName}
                            </div>
                        }
                    </div>

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            firstName: e.target.value
                                        })}
                                    value={cachedItem.firstName}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

                <div className="col-sm-6">

                    <Typography> Last Name</Typography>
                    <div>
                        {
                            !editing &&
                            user.lastName
                        }
                    </div>

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            lastName: e.target.value
                                        })}
                                    value={cachedItem.lastName}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

            </div>

            <div className="row mt-3">

                <div className="col-sm-6">

                    <Typography> Username</Typography>

                    <div>
                        {
                            !editing &&
                            user.userName
                        }
                    </div>

                    <div>
                        {
                            editing &&
                            <div>
                                <input disabled={true}
                                    onChange={(e) =>
                                    setCahedItem({
                                        ...cachedItem,
                                        userName: e.target.value
                                    })}
                                    value={cachedItem.userName}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

                <div className="col-sm-6">

                    <Typography> Email</Typography>

                    <div>
                        {
                            !editing &&
                            user.email
                        }
                    </div>

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            email: e.target.value
                                        })}
                                    value={cachedItem.email}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

                <div className="col-sm-6">

                    {
                        editing &&
                        <Typography> Password</Typography>
                    }
                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            password: e.target.value
                                        })}
                                    value={cachedItem.password} type='password'
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

            </div>

            {

                !anonymous &&
                <div className="row mt-3">

                    <div className="col-sm-6">

                        <Typography>Date of Birth</Typography>
                        <div>
                            {
                                !editing &&
                                user.dob
                            }
                        </div>

                        <div>
                            {
                                editing &&
                                <div>
                                    <input
                                        onChange={(e) =>
                                            setCahedItem({
                                                ...cachedItem,
                                                dob: e.target.value
                                            })}
                                        value={cachedItem.dob}
                                        className="form-control"/>
                                </div>
                            }
                        </div>

                    </div>

                </div>
            }
            <div className="col-sm-6">

                <Typography> Gender</Typography>

                <div>
                    {
                        !editing &&
                        user.gender
                    }
                </div>

                <div>
                    {
                        editing &&
                        <div>
                            <select
                                onChange={(e) =>
                                    setCahedItem({
                                        ...cachedItem,
                                        gender: e.target.value
                                    })}
                                value={cachedItem.gender}
                                className="form-control">
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Non-Binary'>Non-Binary</option>
                            </select>
                        </div>
                    }
                </div>

            </div>

            <br/>
            {
                !anonymous &&
                <div className="row mt-3">

                    <div className="col-6">

                    </div>

                    <div className="col-6">


                        {editing &&
                        <div>
                            <button className="btn btn-success"
                                    onClick={() => {
                                        updateUser(cachedItem.id, cachedItem)
                                        setEditing(false)
                                    }
                                    }
                            >Save
                            </button>
                            &nbsp;
                            &nbsp;
                            <button className="btn btn-danger"
                                    onClick={() => {
                                        setEditing(false)
                                    }}
                            >Cancel
                            </button>
                        </div>
                        }
                        {
                            !editing &&
                            <button className="btn btn-primary"
                                    onClick={() => {
                                        setEditing(true)
                                    }}
                            >Edit profile</button>
                        }
                    </div>

                </div>
            }
        </div>
    )

}
export default BasicInfo