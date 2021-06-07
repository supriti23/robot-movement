
//The direction mapping after rotating left or right from a particular direction
export const possibleRotation = new Map([
  ["North+L", "West"],
  ["North+R", "East"],
  ["South+R", "West"],
  ["South+L", "East"],
  ["East+R", "South"],
  ["East+L", "North"],
  ["West+R", "North"],
  ["West+L", "South"],
]);

export function rotate(degree: number) {
  let img: HTMLElement | null = document.getElementById("robot");
  img && (img.style.transform = "rotate(" + degree + "deg)");
}

export function changeCoord(
  currentDirection: String,
  coordinates: Number[]
): Number[] {
  let newCoords: any = [...coordinates];
  switch (currentDirection) {
    case "East": {
      newCoords[0] += 1;
      break;
    }
    case "West": {
      newCoords[0] -= 1;
      break;
    }
    case "North": {
      newCoords[1] += 1;
      break;
    }
    case "South": {
      newCoords[1] -= 1;
      break;
    }
    default:
      break;
  }
  return newCoords;
}

export function changeCoords(currentDirection: String) {
  let img: any = document.getElementById("robot");
  let style: any= img.currentStyle || window.getComputedStyle(img);
  switch (currentDirection) {
    case "North": {
      let dest = parseInt(style.marginBottom.replace("px", "")) + 10;
      img.style.marginBottom = dest + "px";
      img.animate(
        {
          marginBottom: dest + "px",
        },
        500
      );
      break;
    }
    case "South": {
      let dest = parseInt(style.marginTop.replace("px", "")) + 10;
      img.style.marginTop = dest + "px";
      img.animate(
        {
          marginTop: dest + "px",
        },
        500
      );
      window.scrollTo(0,document.body.scrollHeight);  
      break;
    }
    case "East": {
      let dest = parseInt(style.marginLeft.replace("px", "")) + 20;
      img.style.marginLeft = dest + "px";
      img.animate(
        {
          marginLeft: dest + "px",
        },
        500
      );
      window.scrollTo(document.body.scrollWidth,0);
      break;
    }
    case "West": {
      let dest = parseInt(style.marginRight.replace("px", "")) + 20;
      img.style.marginRight = dest + "px";
      img.animate(
        {
			marginRight: dest + "px",
        },
        500
      );
      window.scrollTo(0,document.body.scrollHeight);
      break;
    }
    default:
      break;
  }
}
