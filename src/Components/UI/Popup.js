const Popup = ({ width, bgcolor, text }) => {
  return (
    <div
      style={{
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "25px",
        color: "#fff",
        backgroundColor: bgcolor,
        padding: "0.5rem 1rem",
        margin: "0.5rem 0",
      }}
    >
      <h4>{text}</h4>
    </div>
  );
};

export default Popup;
