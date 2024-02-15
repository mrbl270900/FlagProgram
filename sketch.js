function setup() {
  scaleGame = 25;

  sizex = 25 * scaleGame;
  sizey = 70 * scaleGame;
  lineSpace = 5 * scaleGame;

  createCanvas(sizex, sizey);

  background(225);
  strokeWeight(1);
  drawField();
  let msg;
  text("Info on the system", 10 * scaleGame, 50);

  let inp = createInput("");
  let button = createButton("Make Play");
  button.position(0, 25);
  inp.position(0, 0);
  inp.input(() => {
    msg = inp.value();
  });
  button.mousePressed(() => {
    background(225);
    strokeWeight(1);
    drawField();
    strokeWeight(2);
    drawFormationFromString(msg);
  });
}

function draw() {}

function drawFormationFromString(inputString) {
  let array = split(inputString, " ");
  let route1Q = "";
  let route2Q = "";
  let route3Q = "";
  let route4Q = "";
  let route1L = null;
  let route2L = null;
  let route3L = null;
  let route4L = null;
  let ekstra = null;

  if (array[1][1] !== null) {
    if (array[1][1] == "L" || array[1][1] == "R") {
      route1Q = array[1][1];
      array[1] = array[1][0];
    }
  }

  if (array[2][1] !== null) {
    if (array[2][1] == "L" || array[2][1] == "R") {
      route2Q = array[2][1];
      array[2] = array[2][0];
    }
  }

  if (array[3][1] !== null) {
    if (array[3][1] == "L" || array[3][1] == "R") {
      route3Q = array[3][1];
      array[3] = array[3][0];
    }
  }
  if (array[4][1] !== null) {
    if (array[4][1] == "L" || array[4][1] == "R") {
      route4Q = array[4][1];
      array[4] = array[4][0];
    }
  }

  drawformation(
    array[0],
    array[1],
    array[2],
    array[3],
    array[4],
    route1Q,
    route2Q,
    route3Q,
    route4Q,
    route1L,
    route2L,
    route3L,
    route4L,
    ekstra
  );
}

function drawField() {
  for (let i = lineSpace + lineSpace; i < sizey; i = i + lineSpace) {
    if (i == sizey - lineSpace) {
      i = i + lineSpace;
    }
    let d = 0;
    for (let j = 0; j <= sizex; j = j + 3) {
      if (d == 0) {
        line(j, i, j + 3, i);
      }
      d = d + 1;
      if (d == 2) {
        d = 0;
      }
    }
  }
}

function drawformation(
  formation,
  route1,
  route2,
  route3,
  route4,
  route1Q,
  route2Q,
  route3Q,
  route4Q,
  route1L,
  route2L,
  route3L,
  route4L,
  ekstra
) {
  if (formation == "R") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(6, 15, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(12.5, 15, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(22, 15, route4, route4Q, route4L);
  }
  if (formation == "L") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(12.5, 15, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(19, 15, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(22, 15, route4, route4Q, route4L);
  }
  if (formation == "RT") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(3, 13, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(5, 15, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(7, 13, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(12.5, 15, route4, route4Q, route4L);
  }
  if (formation == "LT") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(12.5, 15, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(18, 13, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(20, 15, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(22, 13, route4, route4Q, route4L);
  }
  if (formation == "RB") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(10, 15, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(12.5, 15, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(15, 15, route4, route4Q, route4L);
  }
  if (formation == "LB") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(10, 15, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(12.5, 15, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(15, 15, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(22, 15, route4, route4Q, route4L);
  }
  if (formation == "RR") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(6, 15, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(12.5, 15, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(15, 8, route4, route4Q, route4L);
  }
  if (formation == "LR") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(10, 8, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(12.5, 15, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(19, 15, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(22, 15, route4, route4Q, route4L);
  }
  if (formation == "WR") {
    fill(color(255, 204, 0));
    drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(12.5, 15, route2, route2Q, route2L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(12.5, 7, route3, route3Q, route3L);
    fill(color(255, 0, 0));
    drawPlayerAndRoute(22, 15, route4, route4Q, route4L);
  }
  if (ekstra == null) {
    fill(color(0, 0, 0));
    drawPlayer(12.5, 9);
  }
  if (ekstra == "U") {
    fill(color(0, 0, 0));
    drawPlayer(12.5, 12);
  }
  if (ekstra == "R") {
    fill(color(0, 0, 0));
    drawPlayer(12.5, 9);
  }
  if (ekstra == "L") {
    fill(color(0, 0, 0));
    drawPlayer(12.5, 9);
  }
}

function drawPlayer(x, y) {
  circle(x * scaleGame, y * scaleGame, 2 * scaleGame);
}

function drawRoute(x, y, degre, cut, aftercut) {
  degre = degre / 57.2957795;

  line(
    x * scaleGame,
    y * scaleGame,
    x * scaleGame,
    y * scaleGame + cut * scaleGame
  );
  line(
    x * scaleGame,
    y * scaleGame + cut * scaleGame,
    x * scaleGame + aftercut * scaleGame * cos(degre),
    y * scaleGame + cut * scaleGame + aftercut * scaleGame * sin(degre)
  );
}

function drawPlayerAndRouteAll(x, y, degre, cut, aftercut) {
  drawPlayer(x, y - 1);
  drawRoute(x, y, degre, cut, aftercut);
}

function drawPlayerAndRoute(x, y, routenr, rLenghts, otherSide) {
  drawPlayer(x, y - 1);
  route(x, y, routenr, rLenghts, otherSide);
}

function route(x, y, route, otherSide, rLenghts) {
  let done = false;

  if (route == "0") {
    if (rLenghts == null) {
      rLenghts = 5;
    }
    if (otherSide == "R") {
      drawRoute(x, y, 240, rLenghts, 1);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 300, rLenghts, 1);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 240, rLenghts, 1);
      }
      else {
        drawRoute(x, y, 300, rLenghts, 1);
      }
    }
  }
  if (route == "1") {
    if (rLenghts == null) {
      rLenghts = 1;
    }
    if (otherSide == "R") {
      drawRoute(x, y, 180, rLenghts, 10);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 0, rLenghts, 10);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 0, rLenghts, 10);
      }
      else {
        drawRoute(x, y, 180, rLenghts, 10);
      }
    }
  }
  if (route == "2") {
    if (rLenghts == null) {
      rLenghts = 3;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 135, rLenghts, 5);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 45, rLenghts, 5);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 135, rLenghts, 5);
      }
      else{
        drawRoute(x, y, 45, rLenghts, 5);
      }
    }
  }
  if (route == "3") {
    if (rLenghts == null) {
      rLenghts = 5;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 180, rLenghts, 5);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 0, rLenghts, 5);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 0, rLenghts, 5);
      }else {
        drawRoute(x, y, 180, rLenghts, 5);
      }
    }
  }
  if (route == "4") {
    if (rLenghts == null) {
      rLenghts = 10;
    }
    
    
    if (otherSide == "R") {
      drawRoute(x, y, 240, rLenghts, 1);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 300, rLenghts, 1);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 240, rLenghts, 1);
      }else {
        drawRoute(x, y, 300, rLenghts, 1);
      }
    }
  }
  if (route == "5") {
    if (rLenghts == null) {
      rLenghts = 12;
    }
    
    if (otherSide == "R") {
      drawRoute(x, y, 240, rLenghts, 3);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 300, rLenghts, 3);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 300, rLenghts, 3);
      }else {
        drawRoute(x, y, 240, rLenghts, 3);
      }
    }
  }
  if (route == "6") {
    if (rLenghts == null) {
      rLenghts = 5;
    }
    if (x > 12.5 || otherSide == true) {
      drawRoute(x, y, 180, rLenghts, 10);
    } else {
      drawRoute(x, y, 0, rLenghts, 10);
    }
  }
  if (route == "7") {
    if (rLenghts == null) {
      rLenghts = 7;
    }
    if (x > 12.5 || otherSide == true) {
      drawRoute(x, y, 45, rLenghts, 5);
    } else {
      drawRoute(x, y, 135, rLenghts, 5);
    }
  }
  if (route == "8") {
    if (rLenghts == null) {
      rLenghts = 7;
    }
    if (x > 12.5 || otherSide == true) {
      drawRoute(x, y, 135, rLenghts, 5);
    } else {
      drawRoute(x, y, 45, rLenghts, 5);
    }
  }
  if (route == "9") {
    if (rLenghts == null) {
      rLenghts = 12;
    }
    if (x > 12.5 || otherSide == true) {
      drawRoute(x, y, 90, rLenghts, 5);
    } else {
      drawRoute(x, y, 90, rLenghts, 5);
    }
  }
  if (route == "D") {
    if (rLenghts == null) {
      rLenghts = 7;
    }
    if (x > 12.5 || otherSide == true) {
      drawRoute(x, y, 135, rLenghts, 2);
      line(
        getEndRouteX(x, y, 135, rLenghts, 2),
        getEndRouteY(x, y, 135, rLenghts, 2),
        getEndRouteX(x, y, 135, rLenghts, 2) - 7 * scaleGame,
        getEndRouteY(x, y, 135, rLenghts, 2)
      );
    } else {
      drawRoute(x, y, 45, rLenghts, 2);
      line(
        getEndRouteX(x, y, 45, rLenghts, 2),
        getEndRouteY(x, y, 45, rLenghts, 2),
        getEndRouteX(x, y, 45, rLenghts, 2) + 7 * scaleGame,
        getEndRouteY(x, y, 45, rLenghts, 2)
      );
    }
  }
  if (route == "W") {
    if (rLenghts == null) {
      rLenghts = 3;
    }
    if (x > 12.5 || otherSide == true) {
      drawRoute(x, y, 0, 1, rLenghts);
      line(
        getEndRouteX(x, y, 0, 1, rLenghts),
        getEndRouteY(x, y, 0, 1, rLenghts),
        getEndRouteX(x, y, 0, 1, rLenghts) + 1 * scaleGame,
        getEndRouteY(x, y, 0, 1, rLenghts) + 2 * scaleGame
      );
      line(
        getEndRouteX(x, y, 0, 1, rLenghts) + 1 * scaleGame,
        getEndRouteY(x, y, 0, 1, rLenghts) + 2 * scaleGame,
        getEndRouteX(x, y, 0, 1, rLenghts) + 1 * scaleGame,
        getEndRouteY(x, y, 0, 1, rLenghts) + 7 * scaleGame
      );
    } else {
      drawRoute(x, y, 180, 1, rLenghts);
      line(
        getEndRouteX(x, y, 180, 1, rLenghts),
        getEndRouteY(x, y, 180, 1, rLenghts),
        getEndRouteX(x, y, 180, 1, rLenghts) - 1 * scaleGame,
        getEndRouteY(x, y, 180, 1, rLenghts) + 2 * scaleGame
      );
      line(
        getEndRouteX(x, y, 180, 1, rLenghts) - 1 * scaleGame,
        getEndRouteY(x, y, 180, 1, rLenghts) + 2 * scaleGame,
        getEndRouteX(x, y, 180, 1, rLenghts) - 1 * scaleGame,
        getEndRouteY(x, y, 180, 1, rLenghts) + 7 * scaleGame
      );
    }
  }
  if (route == "B") {
    if (rLenghts == null) {
      rLenghts = 2;
    }
    if (x > 12.5 || otherSide == true) {
      drawRoute(x, y, 135, rLenghts, 3);
      line(
        getEndRouteX(x, y, 135, rLenghts, 3),
        getEndRouteY(x, y, 135, rLenghts, 3),
        getEndRouteX(x, y, 135, rLenghts, 3) + 7 * scaleGame,
        getEndRouteY(x, y, 135, rLenghts, 3)
      );
    } else {
      drawRoute(x, y, 45, rLenghts, 3);
      line(
        getEndRouteX(x, y, 45, rLenghts, 3),
        getEndRouteY(x, y, 45, rLenghts, 3),
        getEndRouteX(x, y, 45, rLenghts, 3) - 7 * scaleGame,
        getEndRouteY(x, y, 45, rLenghts, 3)
      );
    }
  }
}

function getEndRouteX(x, y, degre, cut, aftercut) {
  degre = degre / 57.2957795;
  return x * scaleGame + aftercut * scaleGame * cos(degre);
}

function getEndRouteY(x, y, degre, cut, aftercut) {
  degre = degre / 57.2957795;
  return y * scaleGame + cut * scaleGame + aftercut * scaleGame * sin(degre);
}
