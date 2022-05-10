import "./styles.css";

import Icon from "../public/insta-icon.png";

export default function App() {
  return (
    <div className="App">
      <div className="rectangle">
        <div className="icon">
          <img src={Icon} alt="InstaSquare" height="80px" />
        </div>
      </div>
    </div>
  );
}
