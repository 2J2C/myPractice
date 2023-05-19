const paper = document.getElementById("paper");

const getRandomInt = function (scale) {
  return Math.floor(Math.random() * scale);
};

const generateCircle = function (e) {
  let newCircle = document.createElement("div"); //create a new element to be a circle

  newCircle.classList.add("circle"); //append the element to 'circle' class

  let circleList = document.getElementsByClassName("circle");
  let circleNumber = circleList.length;
  newCircle.id = `${circleNumber}`; //give sequential id to the new element

  let r = getRandomInt(200) + 10;
  let x = e.clientX - r / 2;
  let y = e.clientY - r / 2;
  let c = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  let o = (1 + getRandomInt(100)) * 0.004 + 0.2;
  let shadow = getRandomInt(10) / 3; //setting parameters to make circle

  setFigureCircle(newCircle, r);
  setFigurePosition(newCircle, x, y);
  setFigureColor(newCircle, c, o, shadow); //making the new element into a new circle

  //<---codes to give more dynamic style--->//
  newCircle.style.transform = "scale(0,0)";

  gsap.to(newCircle, { scale: 0.8, duration: 1, ease: "elastic.out(1, 0.3)" });
  gsap.to(newCircle, { scale: 0, delay: 0.8 });
  //<---end--->//

  paper.appendChild(newCircle); //appending circle to paper (should be written below style-giving code block)

  setTimeout(() => {
    newCircle.remove();
  }, 300); //eleminating circles to make running environment clear
};

const setFigureCircle = function (figure, r) {
  let s = figure.style;
  s.width = `${r}` + "px";
  s.height = `${r}` + "px";
  s.borderRadius = `${r / 2}` + "px";
};

const setFigurePosition = function (figure, x, y) {
  let s = figure.style;
  s.position = "absolute";
  s.left = `${x}` + "px";
  s.top = `${y}` + "px";
};

const setFigureColor = function (figure, c, o, shadow) {
  let s = figure.style;
  s.backgroundColor = c;
  s.opacity = `${o}`;
  s.boxShadow = `${shadow}` + "px " + `${shadow}` + "px" + " 5px black";
};

paper.addEventListener("mousemove", generateCircle);
