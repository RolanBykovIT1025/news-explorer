import { useState } from "react";
import "./SignInModal.css";

function SignInModal({ isOpen, onClose, onSignUpClick, onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email format";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6)
      errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0 && onSignIn) {
      onSignIn({ email, password });
    }
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const isValid = email.trim() && password.length >= 6 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4L20 20M20 4L4 20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className="modal__title">Sign in</h2>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="modal__field">
            <label className="modal__label">Email</label>
            <input
              type="email"
              className={`modal__input${errors.email && submitted ? " modal__input_error" : ""}`}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && submitted && <span className="modal__error">{errors.email}</span>}
          </div>

          <div className="modal__field">
            <label className="modal__label">Password</label>
            <input
              type="password"
              className={`modal__input${errors.password && submitted ? " modal__input_error" : ""}`}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && submitted && <span className="modal__error">{errors.password}</span>}
          </div>

          <button className="modal__submit" type="submit" disabled={!isValid}>
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
