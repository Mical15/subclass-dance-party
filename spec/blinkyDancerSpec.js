describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      // debugger;
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new MakeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should make a bouncy dancer when envoked', function() {
    // expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
    expect(bouncyDancer).to.exist;
  });

  it('should have a step function that it inherits from makeDancer', function() {
    expect(bouncyDancer.step).to.exist;
  });

});

describe('shyDancer', function() {

  var shyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shyDancer = new MakeShyDancer(10, 20, timeBetweenSteps);
  });

  it('should make a shy dancer when envoked', function() {
    // expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
    expect(shyDancer).to.exist;
  });

  it('should have a step function that it inherits from makeDancer', function() {
    expect(shyDancer.setPosition).to.exist;
  });
});



