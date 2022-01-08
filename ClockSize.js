(function () {
  let AppRect;

  exports.CenterX = function CenterX () {
    if (AppRect == null) { AppRect = Bangle.appRect(); }
    return AppRect.x + AppRect.w/2;
  };

  exports.CenterY = function CenterY () {
    if (AppRect == null) { AppRect = Bangle.appRect(); }
    return AppRect.y + AppRect.h/2;
  };

  exports.outerRadius = function outerRadius () {
    if (AppRect == null) { AppRect = Bangle.appRect(); }
    return Math.min(AppRect.w/2,AppRect.h/2);
  };
})();

