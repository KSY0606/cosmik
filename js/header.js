function test() {
    console.log("a");
  }


  setInterval(function() {
    test();
  }, 30000);
   

  function test() {
    if ($('#chart').css('display') == 'block') {
        $('#chart').css('display', 'none');
    } else {
        $('#chart').css('display', 'block');
    }
}