import "./Input.css";
import {SyntheticEvent} from "react";
interface InputValues {
  instruction: string;
  handleClick: (event: SyntheticEvent) => void;
  handleClear: () => void;
}
const Input = ({ instruction, handleClick, handleClear }: InputValues) => {
  return (
    <div className="inputWrapper">
      <input type="text" value={instruction} readOnly placeholder="Given Instructions" />
      <button onClick={handleClick}>L</button>
      <button onClick={handleClick}>F</button>
      <button onClick={handleClick}>R</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Input;
