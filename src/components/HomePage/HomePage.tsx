import { SyntheticEvent } from "react";
import "./HomePage.css";
import robot from "../../assets/robot.png";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import {
  possibleRotation,
  changeCoord,
  rotate,
  changeCoords,
} from "./RobotMove";

const HomePage = () => {
  const [coordinates, setCoordinates] = useState<Number[]>([0, 0]);
  const [currentDirection, setcurrentDirection] = useState<String>("North");
  const [instruction, setInstruction] = useState<string>("");
  const [degree, setDegree] = useState<number>(0);
  const [currInstruction, setCurrInstruction] = useState<String>("");

  function move(e: SyntheticEvent) {
    e.preventDefault();
    const target = e.target as HTMLElement;
    setInstruction(`${instruction}${target.innerText.toUpperCase()}`);
    setCurrInstruction(target.innerText.toUpperCase());
  }
  function clear() {
    window.location.reload();
  }
  function deadzone() {
    alert("Robot reached a dead zone, please give new instructions");
    clear();
  }
  useEffect(() => {
    calculatePostion();
    if (coordinates[1] >= 65) {
      deadzone();
    } else if (coordinates[0] <= -80) {
      deadzone();
    }
  }, [instruction]);

  function calculatePostion() {
    if (currInstruction === "L" || currInstruction === "R") {
      let nextDirection: String =
        possibleRotation.get(currentDirection + "+" + currInstruction) + "";
      setcurrentDirection(nextDirection);
      var deg = degree;
      if (currInstruction === "R") {
        deg = deg + 90;
        rotate(deg);
        setDegreeValue(deg);
      } else if (currInstruction === "L") {
        deg = deg - 90;
        rotate(deg);
        setDegreeValue(deg);
      }
    } else if (currInstruction === "F") {
      let newCoords: Number[] = changeCoord(currentDirection, coordinates);
      setCoordinates(newCoords);
      changeCoords(currentDirection);
    }
  }

  function setDegreeValue(deg: number) {
    if (deg === 360 || deg === -360) {
      setDegree(0);
    } else {
      setDegree(deg);
    }
  }

  return (
    <>
      <div>
        <Input
          instruction={instruction}
          handleClear={() => clear()}
          handleClick={(event: SyntheticEvent) => move(event)}
        />
        <div className="position">
          Current Coordinates: [{coordinates[0]}, {coordinates[1]}]
        </div>
      </div>
      <div className="backgound" id="background">
        <img src={robot} alt="robot" id="robot" className="robot" />
      </div>
    </>
  );
};
export default HomePage;
