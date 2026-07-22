import { useState } from "react";
import "../SignInModal/SignInModal.css";
import closeIcon from "../../assets/icons/close.svg";

function SignUpModal({ isOpen, onClose, onSignInClick, onSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (nameVal, emailVal, passwordVal, confirmVal) => {
    const errs = {};
    if (!nameVal.trim()) errs.name = "Name is required";
    if (!emailVal.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal))
      errs.email = "Invalid email format";
    if (!passwordVal) errs.password = "Password is required";
    else if (passwordVal.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (!confirmVal) errs.confirm = "Please confirm your password";
    else if (passwordVal !== confirmVal)
      errs.confirm = "Passwords do not match";
    return errs;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setTouched((prev) => ({ ...prev, name: true }));
    setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const handleNameBlur = () => {
    if (!name.trim()) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
    }
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
    }
  };

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
    setTouched((prev) => ({ ...prev, confirm: true }));
    setErrors((prev) => ({ ...prev, confirm: undefined }));
  };

  const handleConfirmBlur = () => {
    if (!confirm) {
      setErrors((prev) => ({ ...prev, confirm: "Please confirm your password" }));
    } else if (password !== confirm) {
      setErrors((prev) => ({ ...prev, confirm: "Passwords do not match" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(name, email, password, confirm);
    setErrors(errs);
    setTouched({ name: true, email: true, password: true, confirm: true });
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

        <h2 className="modal__title">Sign up</h2>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="modal__field">
            <label className="modal__label">Name</label>
            <input
              type="text"
              className={`modal__input${touched.name && errors.name ? " modal__input_error" : ""}`}
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
            />
            {touched.name && errors.name && <span className="modal__error">{errors.name}</span>}
          </div>

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

          <div className="modal__field">
            <label className="modal__label">Confirm password</label>
            <input
              type="password"
              className={`modal__input${touched.confirm && errors.confirm ? " modal__input_error" : ""}`}
              placeholder="Confirm password"
              value={confirm}
              onChange={handleConfirmChange}
              onBlur={handleConfirmBlur}
            />
            {touched.confirm && errors.confirm && <span className="modal__error">{errors.confirm}</span>}
          </div>

          <button className="modal__submit" type="submit">
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
