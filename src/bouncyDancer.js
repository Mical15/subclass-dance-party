var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('bounce-1 animate__animated animate__bounce').addClass('random');
  // this.$node.append('<img id = "nic" src="https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2019/10/faceoff_cage.jpg?offset-y=0"/>');
  // this.$node = this.$node.addClass('test');
  // this.$node.addClass('test');
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

};

