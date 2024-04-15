import './Login.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Register from './Register';

function Login() {


    const navigate = useNavigate()

    const validate= () =>{
        var mail = document.getElementById("mail").value
            var password = document.getElementById("pass").value
            if(mail!= "nishanth@gmail.com" || password!= "456321"){
                window.alert("invalid mail or password")
            }
            else{
                navigate('/')
                document.getElementById("mail").value = ""
                document.getElementById("pass").value = ""
            }
    }

    const callHeader = () =>{
        navigate('/Register')
    }

    return (
        <div>
            <div className="container-fluid d-flex justify-content-center align-items-center back" style={{ height: "100vh" }}>
                <div className="register">
                    <div className="d-flex justify-content-center form p-0 m-0">
                        <h3 className="p-0">Login</h3>
                    </div>
                    <div className="container-fluid d-flex mt-0 flex-column justify-content-center align-items-center">
                        <form action="/">
                            <div className="mail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                                <input type="email" id="mail" name="mailId" placeholder="Email-Id" required></input>
                            </div><br></br>
                            <div className="pass">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5" />
                                </svg>
                                <input type="password" name="passWord" id="pass" placeholder="Password" required></input>
                            </div><br></br>

                            <div className="remember d-flex justify-content-start align-items-center">
                                <input type="checkbox" name="remember" id="remember" style={{ backgroundColor: "transparent" }}></input>
                                <label htmlFor="check" style={{ fontWeight: "600" }}>Remember-Me</label>
                            </div><br></br>

                            <div className="sub mb-3 submitButton d-flex justify-content-center">
                                <input type="submit" value="Sign-In" onClick={validate}
                                    style={{ height: "auto", width: "100px", fontWeight: "700" }}></input>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <a href="/" className="link"><b>forgot-password?</b></a>
                                </div>
                                <div>
                                    <Link type="button" className="link" to="/Register">Sign-Up</Link>
                                </div><br></br>
                            </div><br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login;