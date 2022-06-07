import React from "react";
// Hooks
import { useState, useRef, useEffect, useContext } from "react";
import './Signup.css'
import AuthContext from "../../context/AuthProvider";
import axios from '../../api/axios';
import {Link, useMatch, useResolvedPath, Router } from 'react-router-dom'
import {FaCheck, FaInfoCircle, FaTimes} from 'react-icons/fa'

const FIRST_REGEX = /^[A-Za-z]+$/;
const LAST_REGEX = /^[a-zA-Z]+$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'


const Signup = () => {

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [first, setFirst] = useState('');
  const [validFirst, setValidFirst] = useState(false);
  const [firstFocus, setFirstFocus] = useState(false);

  const [last, setLast] = useState('');
  const [validLast, setValidLast] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const result = FIRST_REGEX.test(first);
    console.log(result);
    console.log(first);
    setValidFirst(result);
  }, [first])

  useEffect(() => {
    const result = LAST_REGEX.test(last);
    console.log(result);
    console.log(last);
    setValidLast(result);
  }, [last])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => { 
    setErrMsg('');
  }, [first, last, email, user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    // prevent default prevents the reloading of the page after clicking submit button
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    console.log(user, pwd);
    setSuccess(true);

    // Axios stuff
    try {
      const response = await axios.post(REGISTER_URL, 
        JSON.stringify({first, last, email, user, pwd}), 
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      // clear input fields here if you want to
    } catch (err) {
        if(!err?.response) {
          setErrMsg('No server Response')
        } else if (err.response?.status === 409) {
          setErrMsg('Username Taken')
        } else {
          setErrMsg('Signup Failed')
        }
        errRef.current.focus();
    }
  }

  return (
    <>
    {success ? (
      <section>
        <h1>Success!</h1>
        <p>
          <a href="#">Sign In</a>
        </p>
      </section>
    ) : (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        
        {/* FIRST NAME */}
        <label htmlFor="first">
          First Name:
          {/* If we have a valid username, apply 'valid' classname which displays check */}
          <span className={validFirst ? 'valid' : 'hide'}>
            <FaCheck color='green'/>
          </span>
          <span className={validFirst || !first ? 'hide' : 'invalid'}>
            <FaTimes color="red"/>
          </span>
        </label>
        <input
          type="text"
          id="firstName"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setFirst(e.target.value)}
          required
          aria-invalid={validFirst ? 'false' : 'true'}
          aria-describedby='firstnote'
          onFocus={() => setFirstFocus(true)}
          onBlur={() => setFirstFocus(false)}
          value={first}
        />
        <p id='firstnote' className={firstFocus && first && !validFirst ? 'instructions' : 'offscreen'}>
          <FaInfoCircle />
          Cannot contain numbers. <br />
          Cannot contain special characters
        </p>

        {/* LAST NAME */}
        <label htmlFor="last">
          Last Name:
          {/* If we have a valid username, apply 'valid' classname which displays check */}
          <span className={validLast ? 'valid' : 'hide'}>
            <FaCheck color='green'/>
          </span>
          <span className={validLast || !last ? 'hide' : 'invalid'}>
            <FaTimes color="red"/>
          </span>  
        </label>
        <input
          type="text"
          id="lastName"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setLast(e.target.value)}
          required
          aria-invalid={validLast ? 'false' : 'true'}
          aria-describedby='lastnote'
          onFocus={() => setLastFocus(true)}
          onBlur={() => setLastFocus(false)}
          value={last}
        />
        <p id='lastnote' className={lastFocus && last && !validLast ? 'instructions' : 'offscreen'}>
          <FaInfoCircle />
          Cannot contain numbers. <br />
          Cannot contain special characters
        </p>

        {/* EMAIL */}
        <label htmlFor="email">
          Email:
          {/* If we have a valid username, apply 'valid' classname which displays check */}
          <span className={validEmail ? 'valid' : 'hide'}>
            <FaCheck color='green'/>
          </span>
          <span className={validEmail || !email ? 'hide' : 'invalid'}>
            <FaTimes color="red"/>
          </span>
        </label>
        <input
          type="text"
          id="email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-invalid={validEmail ? 'false' : 'true'}
          aria-describedby='emailnote'
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          value={email}
        />
        <p id='emailnote' className={emailFocus && email && !validEmail ? 'instructions' : 'offscreen'}>
          <FaInfoCircle />
          Must be a valid email 
        </p>
          
        {/* USERNAME */}
        <label htmlFor="username">
          Username:
          {/* If we have a valid username, apply 'valid' classname which displays check */}
          <span className={validName ? 'valid' : 'hide'}>
            <FaCheck color='green'/>
          </span>
          <span className={validName || !user ? 'hide' : 'invalid'}>
            <FaTimes color="red"/>
          </span>
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? 'false' : 'true'}
          aria-describedby='uidnote'
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          value={user}
        />
        <p id='uidnote' className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
          <FaInfoCircle />
          4-24 character. <br />
          Must begin with a letter. <br />
          Letters, number, underscored, hyphens allowed.
        </p>

        {/* PASSWORD */}
        <label htmlFor="password">
          Password:
          {/* If we have a valid username, apply 'valid' classname which displays check */}
          <span className={validPwd ? 'valid' : 'hide'}>
            <FaCheck color='green'/>
          </span>
          <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
            <FaTimes color="red"/>
          </span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required  
          aria-invalid={validPwd ? 'false' : 'true'}
          aria-describedby='pwdnote'
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          value={pwd}
        />
        <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
          <FaInfoCircle />
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, a number and a special character. <br />
          Allowed special character: 
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </p>

        {/* CONFIRM PASSWORD */}
        <label htmlFor="confirm_pwd">
          Confirm Password: 
          <span className={validMatch && matchPwd ? 'valid' : 'hide'}>
            <FaCheck color='green'/>
          </span>
          <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
            <FaTimes color="red"/>
          </span>
        </label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          required  
          aria-invalid={validMatch ? 'false' : 'true'}
          aria-describedby='confirmnote'
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
          
        />
        <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
          <FaInfoCircle />
          Must match first password.
        </p>

        <button disabled={!validFirst || !validLast || !validEmail || !validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
      </form>
      <p>
        Already have an Account?<br />
        <span className="line">
          {/*put router link here*/}
          <a href="#">Sign In</a>
        </span>
      </p>
    </section>
    )}
    </>
  )
}

export default Signup