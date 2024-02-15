function setup() {
  scaleGame = 25;
  
  sizex = 25 * scaleGame;
  sizey = 70 * scaleGame;
  lineSpace = 5 * scaleGame
  
  createCanvas(sizex, sizey);
}

function draw() {
  background(225);
  
  for(let i = lineSpace+lineSpace; i < sizey; i = i + lineSpace){
    if(i == sizey-(lineSpace)){
       i = i + lineSpace;
       }
    let d = 0;
    for(let j = 0; j <= sizex; j = j + 3){
      if(d == 0){
         line(j, i, j+3, i);
         }
      d = d + 1;
      if(d == 2){
          d = 0;
      }
    }
  }
  
  
  drawformation("R", "8", "3", "7", "8", false, false, true, false, null, null, 4, 5, null);
}

function drawformation(formation, route1, route2, route3, route4,
                        route1Q = false, route2Q = false, route3Q = false, route4Q = false,
                        route1L = null, route2L = null, route3L = null, route4L = null,
                       ekstra = null){
  
  if(formation == "R"){
      fill(color(255, 204, 0));
      drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
      fill(color(0, 100, 200));
      drawPlayerAndRoute(6, 15, route2, route2Q, route2L);
      fill(color(0, 255, 0));
      drawPlayerAndRoute(12.5, 15, route3, route3Q, route3L);
      fill(color(255, 0, 0));
      drawPlayerAndRoute(22, 15, route4, route4Q, route4L);
     }if(formation == "L"){
        fill(color(255, 204, 0));
        drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
        fill(color(0, 100, 200));
        drawPlayerAndRoute(12.5, 15, route2, route2Q, route2L);
        fill(color(0, 255, 0));
        drawPlayerAndRoute(19, 15, route3, route3Q, route3L);
        fill(color(255, 0, 0));
        drawPlayerAndRoute(22, 15, route4, route4Q, route4L);
      }if(formation == "RT"){
          fill(color(255, 204, 0));
          drawPlayerAndRoute(3, 13, route1, route1Q, route1L);
          fill(color(0, 100, 200));
          drawPlayerAndRoute(5, 15, route2, route2Q, route2L);
          fill(color(0, 255, 0));
          drawPlayerAndRoute(7, 13, route3, route3Q, route3L);
          fill(color(255, 0, 0));
          drawPlayerAndRoute(12.5, 15, route4, route4Q, route4L);
      }if(formation == "LT"){
          fill(color(255, 204, 0));
          drawPlayerAndRoute(12.5, 15, route1, route1Q, route1L);
          fill(color(0, 100, 200));
          drawPlayerAndRoute(18, 13, route2, route2Q, route2L);
          fill(color(0, 255, 0));
          drawPlayerAndRoute(20, 15, route3, route3Q, route3L);
          fill(color(255, 0, 0));
          drawPlayerAndRoute(22, 13, route4, route4Q, route4L); 
      }if(formation == "RB"){
          fill(color(255, 204, 0));
          drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
          fill(color(0, 100, 200));
          drawPlayerAndRoute(10, 15, route2, route2Q, route2L);
          fill(color(0, 255, 0));
          drawPlayerAndRoute(12.5, 15, route3, route3Q, route3L);
          fill(color(255, 0, 0));
          drawPlayerAndRoute(15, 15, route4, route4Q, route4L); 
      }if(formation == "LB"){
          fill(color(255, 204, 0));
          drawPlayerAndRoute(10, 15, route1, route1Q, route1L);
          fill(color(0, 100, 200));
          drawPlayerAndRoute(12.5, 15, route2, route2Q, route2L);
          fill(color(0, 255, 0));
          drawPlayerAndRoute(15, 15, route3, route3Q, route3L);
          fill(color(255, 0, 0));
          drawPlayerAndRoute(22, 15, route4, route4Q, route4L); 
      }if(formation == "RR"){
          fill(color(255, 204, 0));
          drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
          fill(color(0, 100, 200));
          drawPlayerAndRoute(6, 15, route2, route2Q, route2L);
          fill(color(0, 255, 0));
          drawPlayerAndRoute(12.5, 15, route3, route3Q, route3L);
          fill(color(255, 0, 0));
          drawPlayerAndRoute(15, 8, route4, route4Q, route4L); 
      }if(formation == "LR"){
          fill(color(255, 204, 0));
          drawPlayerAndRoute(10, 8, route1, route1Q, route1L);
          fill(color(0, 100, 200));
          drawPlayerAndRoute(12.5, 15, route2, route2Q, route2L);
          fill(color(0, 255, 0));
          drawPlayerAndRoute(19, 15, route3, route3Q, route3L);
          fill(color(255, 0, 0));
          drawPlayerAndRoute(22, 15, route4, route4Q, route4L); 
      }if(formation == "WR"){
          fill(color(255, 204, 0));
          drawPlayerAndRoute(3, 15, route1, route1Q, route1L);
          fill(color(0, 100, 200));
          drawPlayerAndRoute(12.5, 15, route2, route2Q, route2L);
          fill(color(0, 255, 0));
          drawPlayerAndRoute(12.5, 7, route3, route3Q, route3L);
          fill(color(255, 0, 0));
          drawPlayerAndRoute(22, 15, route4, route4Q, route4L); 
      }
  console.log(ekstra);
  if(ekstra == null){
          fill(color(0, 0, 0));
          drawPlayer(12.5, 9);
      }if(ekstra == "U"){
          fill(color(0, 0, 0));
          drawPlayer(12.5, 12);
     }if(ekstra == "R"){
          fill(color(0, 0, 0));
          drawPlayer(12.5, 9);
      }if(ekstra == "L"){
          fill(color(0, 0, 0));
          drawPlayer(12.5, 9);
      }
}

function drawPlayer(x, y) {
  circle(x*scaleGame, y*scaleGame, 2*scaleGame);
}

function drawRoute(x, y, degre, cut, aftercut){
  degre = degre/57.2957795
  
  line(x*scaleGame, y*scaleGame, x*scaleGame, y*scaleGame + cut*scaleGame);
  line(x*scaleGame, 
       y*scaleGame + cut*scaleGame,
        x*scaleGame + aftercut*scaleGame*(cos(degre)), 
         y*scaleGame + cut*scaleGame + aftercut*scaleGame*(sin(degre)));
}

function drawPlayerAndRouteAll(x, y, degre, cut, aftercut){
  drawPlayer(x, y-1);
  drawRoute(x, y, degre, cut, aftercut)
}

function drawPlayerAndRoute(x, y, routenr, rLenghts, otherSide){
  drawPlayer(x, y-1);
  route(x, y, routenr, rLenghts, otherSide)
}

function route(x, y, route, otherSide, rLenghts){
  if(route == "0"){
    if(rLenghts == null){
      rLenghts = 5;
    }
    if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 240, rLenghts, 1)
       }else{
         drawRoute(x, y, 300, rLenghts, 1)
       }
     }if(route == "1"){
       if(rLenghts == null){
          rLenghts = 1;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 0, rLenghts, 10)
       }else{
         drawRoute(x, y, 180, rLenghts, 10)
       }
     }if(route == "2"){
       if(rLenghts == null){
          rLenghts = 3;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 135, rLenghts, 5)
       }else{
         drawRoute(x, y, 45, rLenghts, 5)
       }
     }if(route == "3"){
       if(rLenghts == null){
          rLenghts = 5;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 0, rLenghts, 5)
       }else{
         drawRoute(x, y, 180, rLenghts, 5)
       }
     }if(route == "4"){
       if(rLenghts == null){
          rLenghts = 10;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 240, rLenghts, 1)
       }else{
         drawRoute(x, y, 300, rLenghts, 1)
       }
     }if(route == "5"){
       if(rLenghts == null){
          rLenghts = 12;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 300, rLenghts, 3)
       }else{
         drawRoute(x, y, 240, rLenghts, 3)
       }
     }if(route == "6"){
       if(rLenghts == null){
          rLenghts = 5;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 180, rLenghts, 10)
       }else{
         drawRoute(x, y, 0, rLenghts, 10)
       }
     }if(route == "7"){
       if(rLenghts == null){
          rLenghts = 7;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 45, rLenghts, 5)
       }else{
         drawRoute(x, y, 135, rLenghts, 5)
       }
     }if(route == "8"){
       if(rLenghts == null){
          rLenghts = 7;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 135, rLenghts, 5)
       }else{
         drawRoute(x, y, 45, rLenghts, 5)
       }
     }if(route == "9"){
       if(rLenghts == null){
          rLenghts = 12;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 90, rLenghts, 5)
       }else{
         drawRoute(x, y, 90, rLenghts, 5)
       }
     }if(route == "D"){
       if(rLenghts == null){
          rLenghts = 7;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 135, rLenghts, 2)
       line(getEndRouteX(x, y, 135, rLenghts, 2), 
            getEndRouteY(x, y, 135, rLenghts, 2), 
            getEndRouteX(x, y, 135, rLenghts, 2) - 7*scaleGame, 
            getEndRouteY(x, y, 135, rLenghts, 2))
       }else{
         drawRoute(x, y, 45, rLenghts, 2)
       line(getEndRouteX(x, y, 45, rLenghts, 2), 
            getEndRouteY(x, y, 45, rLenghts, 2), 
            getEndRouteX(x, y, 45, rLenghts, 2) + 7*scaleGame, 
            getEndRouteY(x, y, 45, rLenghts, 2))
       }
     }if(route == "W"){
       if(rLenghts == null){
          rLenghts = 3;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 0, 1, rLenghts)
       line(getEndRouteX(x, y, 0, 1, rLenghts), 
            getEndRouteY(x, y, 0, 1, rLenghts), 
            getEndRouteX(x, y, 0, 1, rLenghts) + 1*scaleGame, 
            getEndRouteY(x, y, 0, 1, rLenghts) + 2*scaleGame)
      line(getEndRouteX(x, y, 0, 1, rLenghts) + 1*scaleGame, 
            getEndRouteY(x, y, 0, 1, rLenghts) + 2*scaleGame, 
            getEndRouteX(x, y, 0, 1, rLenghts) + 1*scaleGame, 
            getEndRouteY(x, y, 0, 1, rLenghts) + 7*scaleGame)
       }else{
         drawRoute(x, y, 180, 1, rLenghts)
       line(getEndRouteX(x, y, 180, 1, rLenghts), 
            getEndRouteY(x, y, 180, 1, rLenghts), 
            getEndRouteX(x, y, 180, 1, rLenghts) - 1*scaleGame, 
            getEndRouteY(x, y, 180, 1, rLenghts) + 2*scaleGame)
      line(getEndRouteX(x, y, 180, 1, rLenghts) - 1*scaleGame, 
            getEndRouteY(x, y, 180, 1, rLenghts) + 2*scaleGame, 
            getEndRouteX(x, y, 180, 1, rLenghts) - 1*scaleGame, 
            getEndRouteY(x, y, 180, 1, rLenghts) + 7*scaleGame)
       }
     }if(route == "B"){
       if(rLenghts == null){
          rLenghts = 2;
        }
       if(x > 12.5 || otherSide == true){
         drawRoute(x, y, 135, rLenghts, 3)
       line(getEndRouteX(x, y, 135, rLenghts, 3), 
            getEndRouteY(x, y, 135, rLenghts, 3), 
            getEndRouteX(x, y, 135, rLenghts, 3) + 7*scaleGame, 
            getEndRouteY(x, y, 135, rLenghts, 3))
       }else{
         drawRoute(x, y, 45, rLenghts, 3)
       line(getEndRouteX(x, y, 45, rLenghts, 3), 
            getEndRouteY(x, y, 45, rLenghts, 3), 
            getEndRouteX(x, y, 45, rLenghts, 3) - 7*scaleGame, 
            getEndRouteY(x, y, 45, rLenghts, 3))
       }
     }
}

function getEndRouteX(x, y, degre, cut, aftercut){
  degre = degre/57.2957795
  return (x*scaleGame + aftercut*scaleGame*(cos(degre)))
}

function getEndRouteY(x, y, degre, cut, aftercut){
  degre = degre/57.2957795
  return (y*scaleGame + cut*scaleGame + aftercut*scaleGame*(sin(degre)))
}