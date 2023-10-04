var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var color1 = 250;
background(rgb(randomNumber(1, color1), randomNumber(1, color1), randomNumber(1, color1)));
fill(rgb(randomNumber(1, color1), randomNumber(1, color1), randomNumber(1, color1)));
regularPolygon(200, 200, 12, 200);
var x = 400;
fill(rgb(randomNumber(200, x), randomNumber(200, x), randomNumber(200, x)));
regularPolygon(200, 200, 3, 200);
fill(rgb(randomNumber(50, color1), randomNumber(50, color1), randomNumber(50, color1)));
regularPolygon(200, 200, 8, 175);
var y = 150;
fill("black");
ellipse(y, y, randomNumber(1, 100), 50);
ellipse(250, y, 50, randomNumber(1, 100));
var mouth1 = 20;
fill(rgb(randomNumber(1, color1), randomNumber(1, color1), randomNumber(1, color1)));
regularPolygon(100, color1, 4, mouth1);
regularPolygon(150, 300, 4, mouth1);
regularPolygon(250, 300, 4, mouth1);
regularPolygon(300, 250, 4, mouth1);
regularPolygon(200, 300, 4, mouth1);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
