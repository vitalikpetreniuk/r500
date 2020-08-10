$(function(){

    var top_offset;

    var educational = $('#r500-projects-top').find('.projects-slider-outer').eq(0);
    var media_and_publishing = $('#r500-projects-top').find('.projects-slider-outer').eq(1);
    var events = $('#r500-projects-top').find('.projects-slider-outer').eq(2);
    var movement_events = $('#r500-projects-bottom').find('.projects-slider-outer');
    var ministry = $('#r500-ministry').find('.ministry-slider-outer');

    var educational_dots = '';
    var media_and_publishing_dots = '';
    var events_dots = '';
    var movement_events_dots = '';
    var ministry_dots = '';

    for(var e = 1; e <= educational.find('.ps-item').length; e++)
    {
        if(e < 10)
        {
            educational_dots += '<span><button>0'+e+'</button></span>';
        }else
        {
            educational_dots += '<span><button>'+e+'</button></span>';
        }
    }
    for(var mp = 1; mp <= media_and_publishing.find('.ps-item').length; mp++)
    {
        if(mp < 10)
        {
            media_and_publishing_dots += '<span><button>0'+mp+'</button></span>';
        }else
        {
            media_and_publishing_dots += '<span><button>'+mp+'</button></span>';
        }
    }
    for(var ev = 1; ev <= events.find('.ps-item').length; ev++)
    {
        if(ev < 10)
        {
            events_dots += '<span><button>0'+ev+'</button></span>';
        }else
        {
            events_dots += '<span><button>'+ev+'</button></span>';
        }
    }
    for(var mev = 1; mev <= movement_events.find('.ps-item').length; mev++)
    {
        if(mev < 10)
        {
            movement_events_dots += '<span><button>0'+mev+'</button></span>';
        }else
        {
            movement_events_dots += '<span><button>'+mev+'</button></span>';
        }
    }
    for(var m = 1; m <= ministry.find('.ms-item').length; m++)
    {
        if(m < 10)
        {
            ministry_dots += '<span><button>0'+m+'</button></span>';
        }else
        {
            ministry_dots += '<span><button>'+m+'</button></span>';
        }
    }


    educational.find('.psi-dots').append(educational_dots);
    educational.find('.psi-dots span:first-child').addClass('active');
    media_and_publishing.find('.psi-dots').append(media_and_publishing_dots);
    media_and_publishing.find('.psi-dots span:first-child').addClass('active');
    events.find('.psi-dots').append(events_dots);
    events.find('.psi-dots span:first-child').addClass('active');
    movement_events.find('.psi-dots').append(movement_events_dots);
    movement_events.find('.psi-dots span:first-child').addClass('active');
    ministry.find('.msi-dots').append(ministry_dots);
    ministry.find('.msi-dots span:first-child').addClass('active');



    $(window).on('scroll', function(){

        var $this = $(this);
        var educational_offset = educational.offset().top;
        var media_and_publishing_offset = media_and_publishing.offset().top;
        var events_offset = events.offset().top;
        var movement_events_offset = movement_events.offset().top;
        var ministry_offset = ministry.offset().top;

        if($(window).width() > 1800)
        {
            top_offset = 200;
        }else if($(window).width() <= 1800 && $(window).width() > 1366)
        {
            top_offset = 150;
        }else if($(window).width() <= 1366 && $(window).width() > 1279)
        {
            top_offset = 100;
        }


        var educational_finishline = educational.find('.ps-item:last-child').offset().top - top_offset;
        var media_and_publishing_finishline = media_and_publishing.find('.ps-item:last-child').offset().top - top_offset;
        var events_finishline = events.find('.ps-item:last-child').offset().top - top_offset;
        var movement_events_finishline = movement_events.find('.ps-item:last-child').offset().top - top_offset;
        var ministry_finishline = ministry.find('.ms-item:last-child').offset().top - top_offset;

        if ($this.scrollTop() >= educational_offset && $this.scrollTop() < educational_finishline) {
            $('body').removeClass('educational_in_position').addClass('fixed_educational');
            educational.find('.psi-title').css('top', top_offset);
            educational.find('.psi-dots').css('top', top_offset);

            educational.find('.ps-item').each(function () {
                if ($(window).scrollTop()  >= $(this).offset().top - (top_offset*2)) {
                    var e_id = $(this).index();

                    educational.find('.psi-dots span').removeClass('active');
                    educational.find('.psi-dots span').eq(e_id).addClass('active');
                }
            });
        }else if ($this.scrollTop() < educational_offset)
        {
            $('body').removeClass('fixed_educational');
            educational.find('.psi-title').css('top', top_offset);
            educational.find('.psi-dots').css('top', top_offset);
        }else if ($this.scrollTop() >= educational_finishline)
        {
            $('body').removeClass('fixed_educational').addClass('educational_in_position');
            var li_height = parseInt($('#r500-projects-top').find('.projects-slider-outer').eq(0).find('.ps-item:last-child').height());
            var li_height_offset = 'calc(100% - '+li_height+'px)';
            educational.find('.psi-title').css('top', li_height_offset);
            educational.find('.psi-dots').css('top', li_height_offset);
        }

        if ($this.scrollTop() >= media_and_publishing_offset && $this.scrollTop() < media_and_publishing_finishline) {
            $('body').removeClass('map_in_position').addClass('fixed_map');
            media_and_publishing.find('.psi-title').css('top', top_offset);
            media_and_publishing.find('.psi-dots').css('top', top_offset);

            media_and_publishing.find('.ps-item').each(function () {
                if ($(window).scrollTop()  >= $(this).offset().top - (top_offset*2)) {
                    var e_id = $(this).index();

                    media_and_publishing.find('.psi-dots span').removeClass('active');
                    media_and_publishing.find('.psi-dots span').eq(e_id).addClass('active');
                }
            });
        }else if ($this.scrollTop() < media_and_publishing_offset)
        {
            $('body').removeClass('fixed_map');
            media_and_publishing.find('.psi-title').css('top', top_offset);
            media_and_publishing.find('.psi-dots').css('top', top_offset);
        }else if ($this.scrollTop() >= media_and_publishing_finishline)
        {
            $('body').removeClass('fixed_map').addClass('map_in_position');
            var li_map_height = parseInt($('#r500-projects-top').find('.projects-slider-outer').eq(1).find('.ps-item:last-child').height());
            var li_map_height_offset = 'calc(100% - '+li_map_height+'px)';
            media_and_publishing.find('.psi-title').css('top', li_map_height_offset);
            media_and_publishing.find('.psi-dots').css('top', li_map_height_offset);
        }


        if ($this.scrollTop() >= events_offset && $this.scrollTop() < events_finishline) {
            $('body').removeClass('ev_in_position').addClass('fixed_ev');
            events.find('.psi-title').css('top', top_offset);
            events.find('.psi-dots').css('top', top_offset);

            events.find('.ps-item').each(function () {
                if ($(window).scrollTop()  >= $(this).offset().top - (top_offset*2)) {
                    var e_id = $(this).index();

                    events.find('.psi-dots span').removeClass('active');
                    events.find('.psi-dots span').eq(e_id).addClass('active');
                }
            });
        }else if ($this.scrollTop() < events_offset)
        {
            $('body').removeClass('fixed_ev');
            events.find('.psi-title').css('top', top_offset);
            events.find('.psi-dots').css('top', top_offset);
        }else if ($this.scrollTop() >= events_finishline)
        {
            $('body').removeClass('fixed_ev').addClass('ev_in_position');
            var li_ev_height = parseInt($('#r500-projects-top').find('.projects-slider-outer').eq(2).find('.ps-item:last-child').height());
            var li_ev_height_offset = 'calc(100% - '+li_ev_height+'px)';
            events.find('.psi-title').css('top', li_ev_height_offset);
            events.find('.psi-dots').css('top', li_ev_height_offset);
        }

        if ($this.scrollTop() >= movement_events_offset && $this.scrollTop() < movement_events_finishline) {
            $('body').removeClass('mev_in_position').addClass('fixed_mev');
            movement_events.find('.psi-title').css('top', top_offset);
            movement_events.find('.psi-dots').css('top', top_offset);

            movement_events.find('.ps-item').each(function () {
                if ($(window).scrollTop()  >= $(this).offset().top - (top_offset*2)) {
                    var e_id = $(this).index();

                    movement_events.find('.psi-dots span').removeClass('active');
                    movement_events.find('.psi-dots span').eq(e_id).addClass('active');
                }
            });
        }else if ($this.scrollTop() < movement_events_offset)
        {
            $('body').removeClass('fixed_mev');
            movement_events.find('.psi-title').css('top', top_offset);
            movement_events.find('.psi-dots').css('top', top_offset);
        }else if ($this.scrollTop() >= movement_events_finishline)
        {
            $('body').removeClass('fixed_mev').addClass('mev_in_position');
            var li_mev_height = parseInt($('#r500-projects-bottom').find('.projects-slider-outer').find('.ps-item:last-child').height());
            var li_mev_height_offset = 'calc(100% - '+li_mev_height+'px)';
            movement_events.find('.psi-title').css('top', li_mev_height_offset);
            movement_events.find('.psi-dots').css('top', li_mev_height_offset);
        }

        if ($this.scrollTop() >= ministry_offset && $this.scrollTop() < ministry_finishline) {
            $('body').removeClass('m_in_position').addClass('fixed_m');
            ministry.find('.msi-title').css('top', top_offset);
            ministry.find('.msi-dots').css('top', top_offset);

            ministry.find('.ms-item').each(function () {
                if ($(window).scrollTop()  >= $(this).offset().top - (top_offset*2)) {
                    var e_id = $(this).index();

                    ministry.find('.msi-dots span').removeClass('active');
                    ministry.find('.msi-dots span').eq(e_id).addClass('active');
                }
            });
        }else if ($this.scrollTop() < ministry_offset)
        {
            $('body').removeClass('fixed_m');
            ministry.find('.msi-title').css('top', top_offset);
            ministry.find('.msi-dots').css('top', top_offset);
        }else if ($this.scrollTop() >= ministry_finishline)
        {
            $('body').removeClass('fixed_m').addClass('m_in_position');
            var li_m_height = parseInt($('#r500-ministry').find('.ministry-slider-outer').find('.ms-item:last-child').height());
            var li_m_height_offset = 'calc(100% - '+li_m_height+'px)';
            ministry.find('.msi-title').css('top', li_m_height_offset);
            ministry.find('.msi-dots').css('top', li_m_height_offset);
        }

        var team_centred = $('#r500-team').offset().top - ($(window).height() - $('#r500-team').height())-200;
        var team_finish = $('#r500-team').offset().top + $('#r500-team').height();

        if ($this.scrollTop() >= team_centred && $this.scrollTop() < team_finish){
            $('#r500-team').addClass('no-h');
            setTimeout(function(){
                $('#r500-team').addClass('team-visible');
            },200);
        }else
        {
            $('#r500-team').removeClass('team-visible');
            setTimeout(function(){
                $('#r500-team').removeClass('no-h');
            },200);
        }

    });


    $('.header-menu button').on('click', function () {
        $('.menu-popup').addClass('shown');
    });
    $('.menu-popup .mp-close').on('click', function () {
        $('.menu-popup').removeClass('shown');
    });

    $('.menu-popup ul li a').on('click', function(e){
        e.preventDefault();
        $('.menu-popup').removeClass('shown');

        var menu_el = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(menu_el).offset().top }, 1000);
    });

});