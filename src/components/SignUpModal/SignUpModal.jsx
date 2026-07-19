import "../SignInModal/SignInModal.css";

function SignUpModal({ isOpen, onClose, onSignInClick }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4L20 20M20 4L4 20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className="modal__title">Sign up</h2>

        <div className="modal__field">
          <label className="modal__label">Name</label>
          <input
            type="text"
            className="modal__input"
            placeholder="Enter your name"
          />
        </div>

        <div className="modal__field">
          <label className="modal__label">Email</label>
          <input
            type="email"
            className="modal__input"
            placeholder="Enter email"
          />
        </div>

        <div className="modal__field">
          <label className="modal__label">Password</label>
          <input
            type="password"
            className="modal__input"
            placeholder="Enter password"
          />
        </div>

        <div className="modal__field">
          <label className="modal__label">Confirm password</label>
          <input
            type="password"
            className="modal__input"
            placeholder="Confirm password"
          />
        </div>

        <button className="modal__submit" type="button" disabled>
          Sign up
        </button>

        <p className="modal__footnote">
          or{" "}
          <button
            className="modal__link"
            type="button"
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUpModal;
