$('#user-publication-link').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-bio-main').removeClass('d-flex');
        $('#user-publication-link').addClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-home-link').removeClass('active');
        $('#user-publications').fadeIn('slow');
    });
});

$('#user-home-link').click(function(e){    
    $('#user-publications').stop().fadeOut('slow', function(){
        $('#user-research').hide();
        $('#user-publication-link').removeClass('active');
        $('#user-research-link').removeClass('active');
        $('#user-home-link').addClass('active');
        $('#user-bio-main').addClass('d-flex');
        $('#user-publications').hide();
        $('#user-bio-main').fadeIn('slow');
    });
});

$('#user-research-link').click(function(e){    
    $('#user-bio-main').stop().fadeOut('slow', function(){
        $("ul.chart").hBarChart();
        $('#user-bio-main').removeClass('d-flex');
        $('#user-publications').hide();
        $('#user-research-link').addClass('active');
        $('#user-home-link').removeClass('active');
        $('#user-publication-link').removeClass('active');
        $('#user-research').fadeIn('slow');
    });
});

// Popup window code
function newPopup(url) {
    popupWindow = window.open(
        url,'popUpWindow','height=600,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}

$("ul.chart").hBarChart({

    // background color
    bgColor: 'gray',
  
    // text color
    textColor: '#fff',
  
    // label,data,both
    show: 'label',
  
    // re-sort according to your data
    sorting: false,
  
    // style your maximum value bar
    maxStyle: {
      bg: 'green',
      text: 'white'
    }
    
  });