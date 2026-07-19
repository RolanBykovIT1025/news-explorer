import { useState } from "react";
import "../SignInModal/SignInModal.css";

function SignUpModal({ isOpen, onClose, onSignInClick, onSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email format";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (!confirm) errs.confirm = "Please confirm your password";
    else if (password !== confirm)
      errs.confirm = "Passwords do not match";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0 && onSignUp) {
      onSignUp({ name, email, password });
    }
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const isValid =
    name.trim() &&
    email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    password.length >= 6 &&
    password === confirm;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4L20 20M20 4L4 20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className="modal__title">Sign up</h2>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="modal__field">
            <label className="modal__label">Name</label>
            <input
              type="text"
              className={`modal__input${errors.name && submitted ? " modal__input_error" : ""}`}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && submitted && <span className="modal__error">{errors.name}</span>}
          </div>

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

          <div className="modal__field">
            <label className="modal__label">Confirm password</label>
            <input
              type="password"
              className={`modal__input${errors.confirm && submitted ? " modal__input_error" : ""}`}
              placeholder="Confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            {errors.confirm && submitted && <span className="modal__error">{errors.confirm}</span>}
          </div>

          <button className="modal__submit" type="submit" disabled={!isValid}>
            Sign up
          </button>
        </form>

        <p className="modal__footnote">
          or{" "}
          <button className="modal__link" type="button" onClick={onSignInClick}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUpModal;
