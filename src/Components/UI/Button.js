const Button = (config) => {
  return (
    <button
      type={config.type}
      className={config.className}
    >
      {config.children}
    </button>
  );
};

Button.defaultProps = {
  text: "Submit",
  type: "submit",
};

export default Button;
