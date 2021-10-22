$('#user-home-link').click(function(e){    
    $('#user-publications').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-experience').hide();
        $('#user-awards').hide();
        $('#user-publication-link').removeClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-experience-link').removeClass('active');
        $('#user-awards-link').removeClass('active');
        $('#user-home-link').addClass('active');
        $('#user-bio-main').addClass('d-flex');
        $('#user-publications').hide();
        $('#user-bio-main').fadeIn('slow');
    });
});

$('#user-publication-link').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-experience').hide();
        $('#user-awards').hide();
        $('#user-bio-main').removeClass('d-flex');
        $('#user-home-link').removeClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-experience-link').removeClass('active');
        $('#user-awards-link').removeClass('active');
        $('#user-publication-link').addClass('active');
        $('#user-publications').fadeIn('slow');
    });
});

$('#user-research-link').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-experience').hide();
        $('#user-publications').hide();
        $('#user-awards').hide();
        $('#user-bio-main').removeClass('d-flex');
        $('#user-home-link').removeClass('active');
        $('#user-publication-link').removeClass('active');
        $('#user-experience-link').removeClass('active');
        $('#user-awards-link').removeClass('active');
        $('#user-research-link').addClass('active');
        $('#user-research').fadeIn('slow');
    });
});

$('#user-experience-link').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-awards').hide();
        $('#user-bio-main').removeClass('d-flex');
        $('#user-publications').hide();
        $('#user-experience-link').addClass('active');
        $('#user-home-link').removeClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-publication-link').removeClass('active');
        $('#user-awards-link').removeClass('active');
        $('#user-experience').fadeIn('slow');
    });
});

$('#user-awards-link').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-publications').hide();
        $('#user-experience').hide();
        $('#user-awards-link').addClass('active');
        $('#user-bio-main').removeClass('d-flex');
        $('#user-home-link').removeClass('active');
        $('#user-experience-link').removeClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-publication-link').removeClass('active');
        $('#user-awards').fadeIn('slow');
    });
});



$('#user-publication-link2').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-experience').hide();
        $('#user-awards').hide();
        $('#user-bio-main').removeClass('d-flex');
        $('#user-home-link').removeClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-experience-link').removeClass('active');
        $('#user-awards-link').removeClass('active');
        $('#user-publication-link').addClass('active');
        $('#user-publications').fadeIn('slow');
    });
});

$('#user-research-link2').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-experience').hide();
        $('#user-publications').hide();
        $('#user-awards').hide();
        $('#user-bio-main').removeClass('d-flex');
        $('#user-home-link').removeClass('active');
        $('#user-publication-link').removeClass('active');
        $('#user-experience-link').removeClass('active');
        $('#user-awards-link').removeClass('active');
        $('#user-research-link').addClass('active');
        $('#user-research').fadeIn('slow');
    });
});

$('#user-experience-link2').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-awards').hide();
        $('#user-bio-main').removeClass('d-flex');
        $('#user-publications').hide();
        $('#user-experience-link').addClass('active');
        $('#user-home-link').removeClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-publication-link').removeClass('active');
        $('#user-awards-link').removeClass('active');
        $('#user-experience').fadeIn('slow');
    });
});

$('#user-awards-link2').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-publications').hide();
        $('#user-experience').hide();
        $('#user-awards-link').addClass('active');
        $('#user-bio-main').removeClass('d-flex');
        $('#user-home-link').removeClass('active');
        $('#user-experience-link').removeClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-publication-link').removeClass('active');
        $('#user-awards').fadeIn('slow');
    });
});

// Popup window code
function newPopup(url) {
    popupWindow = window.open(
        url,'popUpWindow','height=600,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}


$('#example').simpleBarGraph({
    data: [
        { key: 'Citations in 2021', value: 161 },
        { key: 'Citations in 2020', value: 49 },
        { key: 'Citations in 2019', value: 9 },
        { key: 'Citations in 2018', value: 1 },
    ],
    height: "300px",
    barsColor: '#d1b100',
    rowCaptionsWidth: "34px",
});