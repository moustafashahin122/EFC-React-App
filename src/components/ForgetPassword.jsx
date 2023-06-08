import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState({ value: "", error: false });
    const handleEmail = (e) => {
        setEmail({ ...email, value: e.target.value });
        if (e.target.value.length < 3) {
            setEmail({ value: e.target.value, error: true });
        } else {
            setEmail({ value: e.target.value, error: false });
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 t">
                    <form >
                        <h1 className="text-center">Reset Password</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email.value} onChange={(e) => { handleEmail(e) }} />
                            {email.error ? (
                                <div id="emailHelp" className="form-text">Your mail must be more than 3 characters </div>
                            ) : ("")}

                        </div>
                        <div className="text-center mb-4">
                            <button type="submit" className="btn btn-danger">Send</button>
                        </div>
                        <div className="text-center mb-4"><hr />
                            <Link className="text-decoration-none" to="/Form">
                                Back to login page
                            </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ResetPassword;