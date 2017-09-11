var current_position=1;



var e = jQuery.Event("keydown");
e.which = 40; // # Some key code value


function home_page(a)
{
  console.log(a)
  a=parseInt(a);
  value = a-current_position;
  console.log(value);

  inside_function(value);

  function inside_function(value)
  {
      if(value>0)
      {
        $(".hey").trigger(e);
        value=value-1;
        console.log("hello");
        inside_function(value);
      }

  }
}

  // else
  // if(current_position>a){
  //   var iterator= current_position-a;
  //   for(var i=iterator;i>=0;i--)
  //   {
  //     var e = jQuery.Event("keydown");
  //     e.which = 38; // # Some key code value
  //     jQuery('body').trigger(e);
  //   }
  //
  // }
  // current_position=a;
