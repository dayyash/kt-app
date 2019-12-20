import theme from "../../themes/theme";

const {
  colors: { white_text, admin_button, client_button, checkin_button }
} = theme;

const styles = {
  adminButton: {
    backgroundColor: admin_button,
    width: "8em",
    borderRadius: "3.5em",
    color: white_text,
    fontSize: "1.5em",
    padding: "0.5em 1em"
  },
  clientButton: {
    backgroundColor: client_button,
    width: "8em",
    borderRadius: "3.5em",
    color: white_text,
    fontSize: "1.5em",
    padding: "0.5em 1em"
  },
  checkInButton: {
    backgroundColor: checkin_button,
    width: "8em",
    fontSize: "1.5em"
  },
  checkInInput: {
    backgroundColor: "rgb(255, 255, 255)"
  }
};

export default styles;
