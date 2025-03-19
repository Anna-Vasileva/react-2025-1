import s from "./Alert.module.css";
import PropTypes from "prop-types";
function Alert({ text, type }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "warning"]).isRequired,
};
export default Alert;
