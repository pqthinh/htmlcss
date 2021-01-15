function openLocal(evt) {
    var i, btn;
    btn = document.getElementsByClassName("local_btn");
    
    for (i = 0; i < btn.length; i++) {
      btn[i].className = btn[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
} 

function openTab(evt, idTab) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("form-search");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tab-search");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(idTab).style.display = "block";
    evt.currentTarget.className += " active";
} 