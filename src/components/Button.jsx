const Button = ({ children, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="font-bold text-lg bg-[var(--primary-text-color)] px-5 py-2 text-white rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
