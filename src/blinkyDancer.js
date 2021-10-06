var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('random img');
  this.$node.append('<img id = "nic" src="https://i.pinimg.com/originals/6e/db/4f/6edb4fd0d74c908b8f370cff9f37de68.jpg"/>');
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

// https://i.pinimg.com/originals/6e/db/4f/6edb4fd0d74c908b8f370cff9f37de68.jpg


