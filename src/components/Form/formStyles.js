// Styles for Name, Email, and Subject

const formElStyle = {
  width: "100%",
  marginBottom: "1rem",
  padding: "1rem"
};

const validFormElStyle = Object.assign({}, formElStyle);
validFormElStyle.outlineColor = "blue";
validFormElStyle.backgroundColor = "deepskyblue";
validFormElStyle.borderColor = "blue";

const invalidFormElStyle = Object.assign({}, formElStyle);
invalidFormElStyle.outlineColor = "red";
invalidFormElStyle.backgroundColor = "LightCoral";
invalidFormElStyle.borderColor = "red";

// Styles for Message

const messageStyle = {
  width: "100%",
  height: "20rem",
  padding: "1rem"
};

const validMessageStyle = Object.assign({}, messageStyle);
validMessageStyle.outlineColor = "blue";
validMessageStyle.backgroundColor = "deepskyblue";
validMessageStyle.borderColor = "blue";

const invalidMessageStyle = Object.assign({}, messageStyle);
invalidMessageStyle.outlineColor = "red";
invalidMessageStyle.backgroundColor = "LightCoral";
invalidMessageStyle.borderColor = "red";

// Styles for Button

const buttonStyle = {
  padding: "1rem",
  borderRadius: ".8rem",
  backgroundColor: "#ccc",
  outline: "none",
  display: "block",
  fontWeight: "bolder",
  marginTop: ".5rem",
  backgroundColor: "green",
  color: "white",
  cursor: "pointer"
};

const disabledButtonStyle = Object.assign({}, buttonStyle);
disabledButtonStyle.backgroundColor = "silver";
disabledButtonStyle.cursor = "not-allowed";

export {
  formElStyle,
  invalidFormElStyle,
  validFormElStyle,
  messageStyle,
  invalidMessageStyle,
  validMessageStyle,
  buttonStyle,
  disabledButtonStyle
};
