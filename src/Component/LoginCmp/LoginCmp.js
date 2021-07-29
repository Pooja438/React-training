import React from 'react'

const LoginCmp = (props) => {
    return (
        <form className="form">
            <div className="group">
                <label htmlFor="" className="label">Name</label>
                <input
                    type="number"
                    name="email"
                    onChange={props.handleChange}
                    className="inp"
                    placeholder="Enter email" required />
                {props.emailErr ? <p style={{ color: "red" }}>Maxlenth should be 6 chars</p> : null}
            </div>
            <div className="group">
                <label htmlFor="" className="label">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={props.handleChange}
                    className="inp"
                    placeholder="Enter password"
                    required />
            </div>
            <div className="group">
                <label htmlFor="" className="label">Address</label>
                <input
                    type="text"
                    name="address"
                    onChange={props.handleChange}
                    className="inp"
                    placeholder="Enter password"
                    required />
            </div>
            <div>
                <button className="btn" type="submit">Submit</button>
                <button className="btn" type="reset">Clear</button>
            </div>
        </form>
    )
}

export default LoginCmp;
