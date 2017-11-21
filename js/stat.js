'use strict';

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

  var max = -1;
  var maxIndex = -1;
  for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  for(var i = 0; i < times.length; i++) {
    ctx.fillRect(130 + 40 * i, 220, times[i] * step, 40);
    // ctx.fillText(names[i], 120 + histogramWidth + 20, 80 + 15 + 40 * i);
  }
};
