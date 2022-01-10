  let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

  Clockwork.windUp({
    size:  require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clock-size/main/ClockSize.js'),
    face:  require('https://raw.githubusercontent.com/rozek/banglejs-2-twelve-fold-clock-face/main/ClockFace.js'),
    hands: require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clock-hands/main/ClockHands.js'),
  },{
    Foreground:'#FFFFFF', Background:'#000000', Seconds:'#FFFF00',
    withDots:true
  });
