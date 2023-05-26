import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
const Form = () => {
    const [email, setEmail] = useState({ value: "", error: false });
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(false);
    const handleEmail = (e) => {
        setEmail({ ...email, value: e.target.value });
        if (e.target.value.length < 3) {
            setEmail({ value: e.target.value, error: true });
        } else {
            setEmail({ value: e.target.value, error: false });
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <Link className = "form-brand" to="/Form">
                        Sign In
                    </Link>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email.value} onChange={(e) => { handleEmail(e) }} />
                            {email.error ? (
                                <div id="emailHelp" className="form-text">Your mail must be more than 3 characters </div>
                            ) : ("")}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => { handlePassword = (e) }} />
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form;