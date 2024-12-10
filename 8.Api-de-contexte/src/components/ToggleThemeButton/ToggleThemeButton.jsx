import sun from "../../assets/sun.svg";
import "./ToggleThemeButton.css";

export default function ToggleTheme() {
  return (
    <button className="toggle-theme-btn">
      <span>Go Dark</span>
      <img src={sun} alt="toggle icon" />
    </button>
  );
}
