/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../components/Button";
import sortLogo from "../assets/svg/logo_sort.svg";
function Popup(props) {
  //states der håndterer vores form
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    //form control og error messages
    if (!email) {
      setEmailError("E-mail er påkrævet");
      isValid = false;
    } else {
      setEmailError("");
    }
    //console log af form data
    if (isValid) {
      console.log("Kundes email:", email);

      setEmail("");
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <div className="popup">
        <div className="popup-inner">
          {isSubmitted ? (
            <div className="popup-form">
              <p className="close-popup" onClick={props.handlePopUp}>
                X
              </p>
              <p className="feedback-p">
                <span>Din tilmelding er registreret!</span>
                <br></br>
                <br></br> Du vil om et øjeblik modtage en mail med din kode til
                gratis fragt.
              </p>
              <p>Vi byder dig velkommen hos</p>
              <img
                src={sortLogo}
                className="popup-logo"
                alt="imusic sort logo"
              />
            </div>
          ) : (
            <form className="popup-form" onSubmit={handleSubmit}>
              <p className="close-popup" onClick={props.handlePopUp}>
                X
              </p>
              <h2 className="popup-heading">Få gratis fragt🥳</h2>
              <p className="popup-p">
                På dit første køb hos imusic, ved at tilmelde dig vores
                nyhedsbrev!
              </p>
              <p className="popup-p2">
                {" "}
                <em>OBS. Kan kombineres med andre rabatter & koder</em>
              </p>
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  className="popup-email"
                  placeholder="Din e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </div>
              <Button
                desc={"TILMELD"}
                className={"cta-btn popup-btn"}
                type="submit"
                clickAction={handleSubmit}
              ></Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Popup;
