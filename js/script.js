$(document).ready(function($) {

    $(window).resize(function(){
       $('.height-follower').height($(window).height());
       $('.height-follower-project').height($(window).height() - 200);
    })
    $(window).resize();

	$('a').smoothScroll({offset: -200});

   /* $(function() {
        $('header a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
    });

    $('.conceptology-retail-carousel').owlCarousel({
        items: 1,
        navContainer: "#portfolio-retail-nav",
        dotsContainer: "#portfolio-retail-dots"
    });*/

    $(window).scroll(function (event) {

        var project1 = document.getElementById("project-item1");
        var project2 = document.getElementById("project-item2");
        var project3 = document.getElementById("project-item3");
        var project4 = document.getElementById("project-item4");
        var project5 = document.getElementById("project-item5");
        var project6 = document.getElementById("project-item6");
        var projects = $('#projects');
        project1.style.top = -(window.pageYOffset / 5) + 'px';
        project2.style.top = -(window.pageYOffset / 3) + 'px';
        project3.style.top = -(window.pageYOffset / 6) + 'px';
        project4.style.top = -(window.pageYOffset / 2) + 'px';
        project5.style.top = -(window.pageYOffset / 2.5) + 'px';
        project6.style.top = -(window.pageYOffset / 3) + 'px';

        if($(window).scrollTop() >= projects.offset().top - 500){
            projects.addClass('animate-proj');

         }else{
            projects.removeClass('animate-proj');
         }

         if($(window).scrollTop() > 50){
            $('.arrow-down').fadeOut();

         }else{
            $('.arrow-down').fadeIn();
         }


     });

        //$.scrollSpeed(250, 1500);

    $('.project-thumbnail-container').on('click', 'a' , function(){


/*
        t = setTimeout($.proxy(function(){
        go = true;
        windowWidth = $(window).width();
        $(this).find('.project-item').animate({
            'left' : '0px',
            'width' : windowWidth,
            'top' : '0px'
        });
    }, this),1000);*/



            //$(this).find('.project-item').addClass('active');
    });




    $('.project-link').on('click', function(){

        var projectLink = $(this).attr('link-proj');
        var projectBackground = $(this).find('.bg-project');

        var selectedProject = $(this).find('img');

        $('.project-link img').not(selectedProject).fadeOut();
        $('body').addClass('open-project');
        $('.project-tag, .view-more-project-container').fadeOut();


        //$('.project-item').fadeOut();
        setTimeout(
          function()
          {
            selectedProject.fadeOut();
            projectBackground.addClass('project-popup');

          }, 1000);
        setTimeout(
          function()
          {

            $('.container-' + projectLink).addClass('show-project');

            $('.single-page').addClass('project-show-detail');
            projectBackground.addClass('project-bg-fade');
          }, 2000);



    });

    $('.close-project').on('click', function(){
        //$('.project-item').fadeOut();

        $('.single-page').removeClass('project-show-detail');


        setTimeout(
          function()
          {
            $('.project-container').removeClass('show-project');
            $('.bg-project').removeClass('project-popup');
            $('.bg-project').removeClass('project-bg-fade');

          }, 1000);
        setTimeout(
          function()
          {
            $('.project-link').removeClass('active');
            $('.project-link img').fadeIn();
            $('.project-tag, .view-more-project-container').fadeIn();
            $('body').removeClass('open-project');
            //$('.bg-project').css('background', 'transparent');
          }, 2000);

    });


    /*svg animation*/

    $(function() {
        var open = false,
            duration = 0.9,
            timing = 'cubic-bezier(0.7, 0, 0.3, 1)';
        Moveit.put(first, {
            start: '0%',
            end: '14%',
            visibility: 1
        });
        Moveit.put(second, {
            start: '0%',
            end: '11.5%',
            visibility: 1
        });
        Moveit.put(middle, {
            start: '0%',
            end: '100%',
            visibility: 1
        });
        $('.trigger').click(function() {
            if (!open) {
                Moveit.animate(first, {
                    visibility: 1,
                    start: '78%',
                    end: '93%',
                    duration: duration,
                    delay: 0,
                    timing: timing
                });
                Moveit.animate(middle, {
                    visibility: 1,
                    start: '50%',
                    end: '50%',
                    duration: duration,
                    delay: 0,
                    timing: timing
                });
                Moveit.animate(second, {
                    visibility: 1,
                    start: '81.5%',
                    end: '94%',
                    duration: duration,
                    delay: 0,
                    timing: timing
                });
            } else {
              Moveit.animate(middle, {
                    visibility: 1,
                    start: '0%',
                    end: '100%',
                    duration: duration,
                    delay: 0,
                    timing: timing
                });
              Moveit.animate(middle, {
                    visibility: 1,
                    duration: duration,
                    delay: 0,
                    timing: timing
                });
              Moveit.animate(first, {
                    visibility: 1,
                    start: '0%',
                    end: '14%',
                    duration: duration,
                    delay: 0,
                    timing: timing
                });
              Moveit.animate(second, {
                    visibility: 1,
                    start: '0%',
                    end: '11.5%',
                    duration: duration,
                    delay: 0,
                    timing: timing
                });
            }
            open = !open;
        });

    });

    particlesJS('particles-js',
  
      {
        "particles": {
          "number": {
            "value": 25,
            "density": {
              "enable": true,
              "value_area": 700
            }
          },
          "color": {
            "value": "#999"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 8
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#999",
            "opacity": 1,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );

    

});
