
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var doop = []; 
        doop = JSON.parse(this.responseText).message;
        var i;
        for(i=0;i<doop.length;i++)
        {
          console.log(doop[i]);
        }
      }
    };
    xhttp.withCredentials = false;
    xhttp.open("POST", "https://morning-brook-40296.herokuapp.com", false);
    xhttp.setRequestHeader('Content-type', "application/x-www-form-urlencoded")
    xhttp.send('link='+"rishaiittp/news/blob/master/news.txt");
  }
 fun_code1();
