jQuery(document).ready(function(){
    "use strict"
    $('html').ripples({
        dropRadius: 100,
        perturbance: 0.05,
        
      });
      var typed = new Typed('.text', { strings: ["<strong class='tog'>Together</strong>", "<strong>For A better</strong>","<strong class='future';>Future!</strong>^1000"], typeSpeed:85,loop:true });
});
