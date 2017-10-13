$(function(){
  
  // Track user in Mixpanel when she signs up
  $('.mixpanel_demo').submit(function(e) {
    
    var form = this;
    e.preventDefault();

    var name = $('#mce-FNAME').val();
    var email = $('#mce-EMAIL').val();
    var place = $('#mce-MUNICIPIO').val();
    var phone = $('#mce-MMERGE5').val();
    var user_type = 'Professional';
    
    var isValid = true;
    $(this).find('.required').each(function() {
      if($(this).val() === '') {
        console.log($(this).attr('name') + ': ' + $(this).val());
        isValid = false;
        $(this).addClass('warning');
      }
    });
    if(!isValid) {
      var first_field = $(form).find('input:first');
      $('.missing_fields').show();
      $(first_field).focus();
    }
    // return isValid;

    // console.log('isValid: ' + isValid);

    if(isValid == true) {
      
      mixpanel.identify(email);
      var date = new Date().toISOString();
      mixpanel.people.set_once({
        "$created": date,
        "Web Corp Subscribed Date": date
      });
      mixpanel.people.set({
        // "$first_name": name,
        // "$last_name": surname,
        "$created": date,
        "$email": email,
        "Phone": phone
      });
      mixpanel.people.union({
        "User Type": [user_type],
        "Place": [place]
      });

      setTimeout( function () { 
        form.submit();
        // HTMLFormElement.prototype.submit.call($('#subscribe_form')[0]);
      }, 300);

      // console.log('submitted');

    }

  });

  // Track user in Mixpanel when she signs up
  $('.blog_subscribe').submit(function(e) {
    
    var form = this;
    e.preventDefault();

    var email = $(this).find('.email').val();
    var user_type = 'Blog Subscribe';

    var isValid = true;
    $(this).find('.required').each(function() {
      if($(this).val() === '') {
        console.log($(this).attr('name') + ': ' + $(this).val());
        isValid = false;
        $(this).addClass('warning');
      }
    });
    if(!isValid) {
      var first_field = $(form).find('input:first');
      $(this).find('.missing_fields').show();
      $(first_field).focus();
    }
    // return isValid;

    if(isValid == true) {

      mixpanel.identify(email);
      var date = new Date().toISOString();
      mixpanel.people.set_once({
        "$created": date
      });
      mixpanel.people.set({
        // "$first_name": name,
        "Web Corp Subscribed": true,
        "Web Corp Subscribed Date": date,
        "$email": email
      });
      mixpanel.people.union({
        "User Type": [user_type]
      });

      $(this).find('.fields').hide();
      $(this).find('.notice').show();
      
      // setTimeout( function () { 
      //   form.submit();
      //   // HTMLFormElement.prototype.submit.call($('#subscribe_form')[0]);
      // }, 300);

      // console.log('submitted');

    }

  });

});