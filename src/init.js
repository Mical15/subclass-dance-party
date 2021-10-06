$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // dance = {}

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() + 30,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $('body').on('mouseover', '.bounce-1', function(event) {
    // debugger;
    $('.bounce-1').removeClass('animate__animated animate__bounce');
    console.log('yo');
  });

  $('.addAlignButton').on('click', function(event) {
    $('.dancer').css('top', 100);
    $('.bounce-1').css('top', 100);
    $('.shy').css('top', 100);
  });


  $('.addFunctionButton').click( function(event) {
    var $dancerArray = $('.random');
    // console.log($dancerArray);
    // console.log($dancerArray[0]);
    // $dancerArray.eq(0).addClass('sup');
    // console.log($dancerArray[0]);

    var shortestDistance = 200000;
    var dancer1;
    var dancer2;
    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = 0; j < window.dancers.length; j++) {
        // debugger;
        if(i !== j && $dancerArray.eq(i).attr('class') !== 'dancer random' && $dancerArray.eq(j).attr('class') !== 'dancer random') {
          var x = Math.abs(window.dancers[i].left - window.dancers[j].left);
          var y = Math.abs(window.dancers[i].top - window.dancers[i].top);
          var c = Math.sqrt((x ** 2) + (y ** 2));
          if (c < shortestDistance) {
            shortestDistance = c;
            dancer1 = i
            dancer2 = j;


          }
        }
      }
    }
    // && $dancerArray.eq(i).attr('class') !== 'dancer' && $dancerArray.eq(j).attr('class')
    // console.log(shortestDistance);
    // console.log(dancer1);
    // console.log(dancer2);
    // var class1IsDancer = false;
    // var class2IsDancer = false;
    var class1 = $dancerArray.eq(dancer1).attr('class');
    var class2 = $dancerArray.eq(dancer2).attr('class');
    // if (class1 === 'dancer') {
    //   class1IsDancer = true;
    // }
    // if (class2 === 'dancer') {
    //   class2IsDancer = true;
    // }
    // // console.log($dancerArray.eq(dancer1).attr('class'));
    // // console.log($dancerArray.eq(dancer2).attr('class'));
    // // console.log(typeof class1);
    // if (class1IsDancer) {
    //   $dancerArray.eq(dancer1).removeClass(class1).addClass(class2);
    //   $dancerArray.eq(dancer2).removeClass(class2).addClass(class1);
    // } else {
    //   $dancerArray.eq(dancer1).removeClass(class1).addClass(class2);
    //   $dancerArray.eq(dancer2).removeClass(class2).addClass(class1);
    // }

    $dancerArray.eq(dancer1).removeClass(class1).addClass(class2);
    $dancerArray.eq(dancer2).removeClass(class2).addClass(class1);


  });






});

