function setup() {
  scaleGame = 20;

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
    text("Info on the system", 10 * scaleGame, 50);
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
      if (array[1][2] !== null) {
        route1L = array[1][2];
        array[1] = array[1][0];
      } else {
        array[1] = array[1][0];
      }
    } else {
      route1L = array[1][1];
      array[1] = array[1][0];
    }
  }

  if (array[2][1] !== null) {
    if (array[2][1] == "L" || array[2][1] == "R") {
      route2Q = array[2][1];
      if (array[2][2] !== null) {
        route2L = array[2][2];
        array[2] = array[2][0];
      } else {
        array[2] = array[2][0];
      }
    } else {
      route2L = array[2][1];
      array[2] = array[2][0];
    }
  }

  if (array[3][1] !== null) {
    if (array[3][1] == "L" || array[3][1] == "R") {
      route3Q = array[3][1];
      if (array[3][2] !== null) {
        route3L = array[3][2];
        array[3] = array[3][0];
      } else {
        array[3] = array[3][0];
      }
    } else {
      route3L = array[3][1];
      array[3] = array[3][0];
    }
  }

  if (array[4][1] !== null) {
    if (array[4][1] == "L" || array[4][1] == "R") {
      route4Q = array[4][1];
      if (array[4][2] !== null) {
        route4L = array[4][2];
        array[4] = array[4][0];
      } else {
        array[4] = array[4][0];
      }
    } else {
      route4L = array[4][1];
      array[4] = array[4][0];
    }
  }

  if (array.length > 5) {
    ekstra = array[5];
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
  if (formation == "L") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(3, 25, route1, route1Q, route1L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(6, 25, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(12.5, 25, route3, route3Q, route3L);
    fill(color(255, 204, 0));
    drawPlayerAndRoute(22, 25, route4, route4Q, route4L);
  }
  if (formation == "R") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(3, 25, route1, route1Q, route1L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(12.5, 25, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(19, 25, route3, route3Q, route3L);
    fill(color(255, 204, 0));
    drawPlayerAndRoute(22, 25, route4, route4Q, route4L);
  }
  if (formation == "LT") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(3, 27, route1, route1Q, route1L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(5, 25, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(7, 27, route3, route3Q, route3L);
    fill(color(255, 204, 0));
    drawPlayerAndRoute(12.5, 25, route4, route4Q, route4L);
  }
  if (formation == "RT") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(12.5, 25, route1, route1Q, route1L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(18, 27, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(20, 25, route3, route3Q, route3L);
    fill(color(255, 204, 0));
    drawPlayerAndRoute(22, 27, route4, route4Q, route4L);
  }
  if (formation == "LB") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(3, 25, route1, route1Q, route1L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(10, 25, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(12.5, 25, route3, route3Q, route3L);
    fill(color(255, 204, 0));
    drawPlayerAndRoute(15, 25, route4, route4Q, route4L);
  }
  if (formation == "RB") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(10, 25, route1, route1Q, route1L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(12.5, 25, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(15, 25, route3, route3Q, route3L);
    fill(color(255, 204, 0));
    drawPlayerAndRoute(22, 25, route4, route4Q, route4L);
  }
  if (formation == "LR") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(3, 25, route1, route1Q, route1L);
    fill(color(0, 225, 0));
    drawPlayerAndRoute(6, 25, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(12.5, 25, route3, route3Q, route3L);
    fill(color(255, 204, 0));
    drawPlayerAndRoute(10, 32, "R", route4Q, route4L);

    let done = false;

    if (route4Q == "L") {
      route(10, 25, route4, null, route4L);
      done = true;
    }
    if (route4Q == "R") {
      route(15, 25, route4, null, route4L);
      done = true;
    }
    if (done == false) {
      route(15, 25, route4, null, route4L);
    }
  }
  if (formation == "RR") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(10, 32, "R", route1Q, route1L);

    let done = false;

    if (route1Q == "L") {
      route(10, 25, route1, null, route1L);
      done = true;
    }
    if (route1Q == "R") {
      route(15, 25, route1, null, route1L);
      done = true;
    }
    if (done == false) {
      route(15, 25, route1, null, route1L);
    }

    fill(color(0, 255, 0));
    drawPlayerAndRoute(12.5, 25, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(19, 25, route3, route3Q, route3L);
    fill(color(255, 204, 0));
    drawPlayerAndRoute(22, 25, route4, route4Q, route4L);
  }
  if (formation == "WR") {
    fill(color(255, 0, 0));
    drawPlayerAndRoute(3, 25, route1, route1Q, route1L);
    fill(color(0, 255, 0));
    drawPlayerAndRoute(12.5, 25, route2, route2Q, route2L);
    fill(color(0, 100, 200));
    drawPlayerAndRoute(12.5, 33, "R", route3Q, null);

    let done = false;

    if (route3Q == "L") {
      route(9.7, 25.35, route3, null, route3L);
      done = true;
    }
    if (route3Q == "R") {
      route(15.3, 25.35, route3, null, route3L);
      done = true;
    }
    if (done == false) {
      route(15.3, 25.35, route3, null, route3L);
    }

    fill(color(255, 204, 0));
    drawPlayerAndRoute(22, 25, route4, route4Q, route4L);
  }

  if (ekstra == null) {
    fill(color(0, 0, 0));
    drawPlayer(12.5, 31);
  }
  if (ekstra == "U") {
    fill(color(0, 0, 0));
    drawPlayer(12.5, 28);
  }
  if (ekstra == "RS") {
    fill(color(0, 0, 0));
    drawPlayer(12.5, 31);
    let oldI = 12.5;
    for (let i = 12.5; i < 19; i = i + 1) {
      if (oldI + 2 == i) {
        oldI = oldI + 1;
        line(oldI * scaleGame, 26 * scaleGame, i * scaleGame, 26 * scaleGame);
        oldI = i;
      }
    }
    line(19 * scaleGame, 26 * scaleGame, 12.5 * scaleGame, 31 * scaleGame);
  }
  if (ekstra == "LS") {
    fill(color(0, 0, 0));
    drawPlayer(12.5, 31);
    let oldI = 12.5;
    for (let i = 12.5; i > 6; i = i - 1) {
      if (oldI - 2 == i) {
        oldI = oldI - 1;
        line(oldI * scaleGame, 26 * scaleGame, i * scaleGame, 26 * scaleGame);
        oldI = i;
      }
    }
    line(6 * scaleGame, 26 * scaleGame, 12.5 * scaleGame, 31 * scaleGame);
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
  drawPlayer(x, y + 1);
  drawRoute(x, y, degre, cut, aftercut);
}

function drawPlayerAndRoute(x, y, routenr, rLenghts, otherSide) {
  drawPlayer(x, y + 1);
  route(x, y, routenr, rLenghts, otherSide);
}

function route(x, y, route, otherSide, rLenghts) {
  let done = false;

  if (route == "0") {
    if (rLenghts == null) {
      rLenghts = 5;
    }
    if (otherSide == "R") {
      drawRoute(x, y, 45, -rLenghts, 1);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 135, -rLenghts, 1);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 135, -rLenghts, 1);
      } else {
        drawRoute(x, y, 45, -rLenghts, 1);
      }
    }
  }
  if (route == "1") {
    if (rLenghts == null) {
      rLenghts = 1;
    }
    if (otherSide == "R") {
      drawRoute(x, y, 0, -rLenghts, 10);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 180, -rLenghts, 10);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 0, -rLenghts, 10);
      } else {
        drawRoute(x, y, 180, -rLenghts, 10);
      }
    }
  }
  if (route == "2") {
    if (rLenghts == null) {
      rLenghts = 3;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 315, -rLenghts, 5);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 225, -rLenghts, 5);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 225, -rLenghts, 5);
      } else {
        drawRoute(x, y, 315, -rLenghts, 5);
      }
    }
  }
  if (route == "3") {
    if (rLenghts == null) {
      rLenghts = 5;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 0, -rLenghts, 5);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 180, -rLenghts, 5);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 0, -rLenghts, 5);
      } else {
        drawRoute(x, y, 180, -rLenghts, 5);
      }
    }
  }
  if (route == "4") {
    if (rLenghts == null) {
      rLenghts = 10;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 45, -rLenghts, 1);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 135, -rLenghts, 1);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 135, -rLenghts, 1);
      } else {
        drawRoute(x, y, 45, -rLenghts, 1);
      }
    }
  }
  if (route == "5") {
    if (rLenghts == null) {
      rLenghts = 12;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 45, -rLenghts, 3);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 135, -rLenghts, 3);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 45, -rLenghts, 3);
      } else {
        drawRoute(x, y, 135, -rLenghts, 3);
      }
    }
  }
  if (route == "6") {
    if (rLenghts == null) {
      rLenghts = 5;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 0, -rLenghts, 10);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 180, -rLenghts, 10);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 180, -rLenghts, 10);
      } else {
        drawRoute(x, y, 0, -rLenghts, 10);
      }
    }
  }
  if (route == "7") {
    if (rLenghts == null) {
      rLenghts = 7;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 315, -rLenghts, 5);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 225, -rLenghts, 5);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 315, -rLenghts, 5);
      } else {
        drawRoute(x, y, 225, -rLenghts, 5);
      }
    }
  }
  if (route == "8") {
    if (rLenghts == null) {
      rLenghts = 7;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 315, -rLenghts, 5);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 225, -rLenghts, 5);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 225, -rLenghts, 5);
      } else {
        drawRoute(x, y, 315, -rLenghts, 5);
      }
    }
  }
  if (route == "9") {
    if (rLenghts == null) {
      rLenghts = 12;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 270, -rLenghts, 5);
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 270, -rLenghts, 5);
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 270, -rLenghts, 5);
      } else {
        drawRoute(x, y, 270, -rLenghts, 5);
      }
    }
  }
  if (route == "D") {
    if (rLenghts == null) {
      rLenghts = 7;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 315, -rLenghts, 2);
      line(
        getEndRouteX(x, y, 315, -rLenghts, 2),
        getEndRouteY(x, y, 315, -rLenghts, 2),
        getEndRouteX(x, y, 315, -rLenghts, 2) + 7 * scaleGame,
        getEndRouteY(x, y, 315, -rLenghts, 2)
      );
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 225, -rLenghts, 2);
      line(
        getEndRouteX(x, y, 225, -rLenghts, 2),
        getEndRouteY(x, y, 225, -rLenghts, 2),
        getEndRouteX(x, y, 225, -rLenghts, 2) - 7 * scaleGame,
        getEndRouteY(x, y, 225, -rLenghts, 2)
      );
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 225, -rLenghts, 2);
        line(
          getEndRouteX(x, y, 225, -rLenghts, 2),
          getEndRouteY(x, y, 225, -rLenghts, 2),
          getEndRouteX(x, y, 225, -rLenghts, 2) - 7 * scaleGame,
          getEndRouteY(x, y, 225, -rLenghts, 2)
        );
      } else {
        drawRoute(x, y, 315, -rLenghts, 2);
        line(
          getEndRouteX(x, y, 315, -rLenghts, 2),
          getEndRouteY(x, y, 315, -rLenghts, 2),
          getEndRouteX(x, y, 315, -rLenghts, 2) + 7 * scaleGame,
          getEndRouteY(x, y, 315, -rLenghts, 2)
        );
      }
    }
  }
  if (route == "W") {
    if (rLenghts == null) {
      rLenghts = 3;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 0, -1, rLenghts);
      line(
        getEndRouteX(x, y, 0, -1, rLenghts),
        getEndRouteY(x, y, 0, -1, rLenghts),
        getEndRouteX(x, y, 0, -1, rLenghts) + 1 * scaleGame,
        getEndRouteY(x, y, 0, -1, rLenghts) - 2 * scaleGame
      );
      line(
        getEndRouteX(x, y, 0, -1, rLenghts) + 1 * scaleGame,
        getEndRouteY(x, y, 0, -1, rLenghts) - 2 * scaleGame,
        getEndRouteX(x, y, 0, -1, rLenghts) + 1 * scaleGame,
        getEndRouteY(x, y, 0, -1, rLenghts) - 7 * scaleGame
      );
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 180, -1, rLenghts);
      line(
        getEndRouteX(x, y, 180, -1, rLenghts),
        getEndRouteY(x, y, 180, -1, rLenghts),
        getEndRouteX(x, y, 180, -1, rLenghts) - 1 * scaleGame,
        getEndRouteY(x, y, 180, -1, rLenghts) - 2 * scaleGame
      );
      line(
        getEndRouteX(x, y, 180, -1, rLenghts) - 1 * scaleGame,
        getEndRouteY(x, y, 180, -1, rLenghts) - 2 * scaleGame,
        getEndRouteX(x, y, 180, -1, rLenghts) - 1 * scaleGame,
        getEndRouteY(x, y, 180, -1, rLenghts) - 7 * scaleGame
      );
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 0, -1, rLenghts);
        line(
          getEndRouteX(x, y, 0, -1, rLenghts),
          getEndRouteY(x, y, 0, -1, rLenghts),
          getEndRouteX(x, y, 0, -1, rLenghts) + 1 * scaleGame,
          getEndRouteY(x, y, 0, -1, rLenghts) - 2 * scaleGame
        );
        line(
          getEndRouteX(x, y, 0, -1, rLenghts) + 1 * scaleGame,
          getEndRouteY(x, y, 0, -1, rLenghts) - 2 * scaleGame,
          getEndRouteX(x, y, 0, -1, rLenghts) + 1 * scaleGame,
          getEndRouteY(x, y, 0, -1, rLenghts) - 7 * scaleGame
        );
      } else {
        drawRoute(x, y, 180, -1, rLenghts);
        line(
          getEndRouteX(x, y, 180, -1, rLenghts),
          getEndRouteY(x, y, 180, -1, rLenghts),
          getEndRouteX(x, y, 180, -1, rLenghts) - 1 * scaleGame,
          getEndRouteY(x, y, 180, -1, rLenghts) - 2 * scaleGame
        );
        line(
          getEndRouteX(x, y, 180, -1, rLenghts) - 1 * scaleGame,
          getEndRouteY(x, y, 180, -1, rLenghts) - 2 * scaleGame,
          getEndRouteX(x, y, 180, -1, rLenghts) - 1 * scaleGame,
          getEndRouteY(x, y, 180, -1, rLenghts) - 7 * scaleGame
        );
      }
    }
  }

  if (route == "B") {
    if (rLenghts == null) {
      rLenghts = 2;
    }

    if (otherSide == "R") {
      drawRoute(x, y, 315, -rLenghts, 3);
      line(
        getEndRouteX(x, y, 315, -rLenghts, 3),
        getEndRouteY(x, y, 315, -rLenghts, 3),
        getEndRouteX(x, y, 315, -rLenghts, 3) - 7 * scaleGame,
        getEndRouteY(x, y, 315, -rLenghts, 3)
      );
      done = true;
    }
    if (otherSide == "L") {
      drawRoute(x, y, 225, -rLenghts, 3);
      line(
        getEndRouteX(x, y, 225, -rLenghts, 3),
        getEndRouteY(x, y, 225, -rLenghts, 3),
        getEndRouteX(x, y, 225, -rLenghts, 3) + 7 * scaleGame,
        getEndRouteY(x, y, 225, -rLenghts, 3)
      );
      done = true;
    }
    if (done == false) {
      if (x > 12.5) {
        drawRoute(x, y, 225, -rLenghts, 3);
        line(
          getEndRouteX(x, y, 225, -rLenghts, 3),
          getEndRouteY(x, y, 225, -rLenghts, 3),
          getEndRouteX(x, y, 225, -rLenghts, 3) + 7 * scaleGame,
          getEndRouteY(x, y, 225, -rLenghts, 3)
        );
      } else {
        drawRoute(x, y, 315, -rLenghts, 3);
        line(
          getEndRouteX(x, y, 315, -rLenghts, 3),
          getEndRouteY(x, y, 315, -rLenghts, 3),
          getEndRouteX(x, y, 315, -rLenghts, 3) - 7 * scaleGame,
          getEndRouteY(x, y, 315, -rLenghts, 3)
        );
      }
    }
  }

  if (route == "R") {
    if (x == 12.5) {
      if (otherSide == "R") {
        drawRoute(x, y, 315, 0, 4);
        line(
          getEndRouteX(x, y, 315, 0, 4),
          getEndRouteY(x, y, 315, 0, 4),
          getEndRouteX(x, y, 315, 0, 4),
          getEndRouteY(x, y, 315, 0, 4) - 5 * scaleGame
        );
        done = true;
      }
      if (otherSide == "L") {
        drawRoute(x, y, 225, 0, 4);
        line(
          getEndRouteX(x, y, 225, 0, 4),
          getEndRouteY(x, y, 225, 0, 4),
          getEndRouteX(x, y, 225, 0, 4),
          getEndRouteY(x, y, 225, 0, 4) - 5 * scaleGame
        );
        done = true;
      }
      if (done == false) {
        line(
          getEndRouteX(x, y, 315, 0, 4),
          getEndRouteY(x, y, 315, 0, 4),
          getEndRouteX(x, y, 315, 0, 4),
          getEndRouteY(x, y, 315, 0, 4) - 5 * scaleGame
        );
        drawRoute(x, y, 315, 0, 4);
      }
    }
    if (x > 12.5) {
      if (otherSide == "R") {
        drawRoute(x, y, 270, -7, 0);
        done = true;
      }
      if (otherSide == "L") {
        drawRoute(x, y, 225, -2, 7);
        done = true;
      }
      if (done == false) {
        drawRoute(x, y, 225, -2, 7);
      }
    }
    if (x < 12.5) {
      if (otherSide == "R") {
        drawRoute(x, y, 315, -2, 7);
        done = true;
      }
      if (otherSide == "L") {
        drawRoute(x, y, 270, -7, 0);
        done = true;
      }
      if (done == false) {
        drawRoute(x, y, 315, -2, 7);
      }
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
