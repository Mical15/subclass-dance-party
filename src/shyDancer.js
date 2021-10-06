var MakeShyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('shy').addClass('random');
  // this.$node.append('<img id = "nic" src="https://cdn-stream.httpid.com/c201/wp-content/uploads/2015/03/Con-Air-Cover.png"/>');
  // this.$node = this.$node.addClass('test');
  // this.$node.addClass('test');
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
};

MakeShyDancer.prototype = Object.create(MakeDancer.prototype);
MakeShyDancer.prototype.constructor = MakeShyDancer;

MakeShyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

};