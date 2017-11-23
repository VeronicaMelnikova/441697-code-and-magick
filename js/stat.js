'use strict';

var HISTOGRAM_HEIGHT = 150;
var BAR_WIDTH = 40;
var INDENT = 90;
var INITIAL_X = 160;
var INITIAL_Y = 240;
var LINE_HEIGHT = 15;

var getMaxElement = function (array) {
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item > max) {
      max = item;
    }
  }
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.lineTo(320, 30);
  ctx.lineTo(530, 20);
  ctx.lineTo(510, 80);
  ctx.bezierCurveTo(510, 80, 530, 155, 510, 230);
  ctx.lineTo(530, 290);
  ctx.lineTo(320, 280);
  ctx.lineTo(110, 290);
  ctx.lineTo(130, 230);
  ctx.bezierCurveTo(130, 230, 110, 155, 130, 80);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(310, 20);
  ctx.lineTo(520, 10);
  ctx.lineTo(500, 70);
  ctx.bezierCurveTo(500, 70, 520, 145, 500, 220);
  ctx.lineTo(520, 280);
  ctx.lineTo(310, 270);
  ctx.lineTo(100, 280);
  ctx.lineTo(120, 220);
  ctx.bezierCurveTo(120, 220, 100, 145, 120, 70);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 215, 60);

  // var max = 0;
  // for (var i = 0; i < times.length; i++) {
  //   var time = times[i];
  //   if (time > max) {
  //     max = time;
  //   }
  // }

  var step = HISTOGRAM_HEIGHT / (getMaxElement(times) * (-1));
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ?
      'rgba(255, 0, 0, 1)' :
      'rgba(0, 0, 255, ' + Math.random(0.1, 1) + ')';

    var coordinateX = INITIAL_X + INDENT * i;
    var columnHeight = times[i] * step;
    ctx.fillRect(coordinateX, INITIAL_Y, BAR_WIDTH, columnHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], coordinateX, INITIAL_Y + LINE_HEIGHT);
    ctx.fillText(Math.round(times[i]), coordinateX, INITIAL_Y + columnHeight - 5);
  }
};
