import { useState } from "react";
import "./SignInModal.css";
import closeIcon from "../../assets/icons/close.svg";

function SignInModal({ isOpen, onClose, onSignUpClick, onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (emailVal, passwordVal) => {
    const errs = {};
    if (!emailVal.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal))
      errs.email = "Invalid email format";
    if (!passwordVal) errs.password = "Password is required";
    else if (passwordVal.length < 6)
      errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setTouched((prev) => ({ ...prev, email: true }));
    setErrors((prev) => ({ ...prev, email: undefined }));
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setTouched((prev) => ({ ...prev, password: true }));
    setErrors((prev) => ({ ...prev, password: undefined }));
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
    } else if (password.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
    } else {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(email, password);
    setErrors(errs);
    setTouched({ email: true, password: true });
    if (Object.keys(errs).length === 0 && onSignIn) {
      onSignIn({ email, password });
    }
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setErrors({});
    setTouched({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={handleClose} aria-label="Close">
          <img src={closeIcon} alt="Close" width="24" height="24" />
        </button>

        <h2 className="modal__title">Sign in</h2>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="modal__field">
            <label className="modal__label">Email</label>
            <input
              type="email"
              className={`modal__input${touched.email && errors.email ? " modal__input_error" : ""}`}
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            {touched.email && errors.email && <span className="modal__error">{errors.email}</span>}
          </div>

          <div className="modal__field">
            <label className="modal__label">Password</label>
            <input
              type="password"
              className={`modal__input${touched.password && errors.password ? " modal__input_error" : ""}`}
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            {touched.password && errors.password && <span className="modal__error">{errors.password}</span>}
          </div>

          <button className="modal__submit" type="submit">
            Sign in
          </button>
        </form>

        <p className="modal__footnote">
          or{" "}
          <button className="modal__link" type="button" onClick={onSignUpClick}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignInModal;
