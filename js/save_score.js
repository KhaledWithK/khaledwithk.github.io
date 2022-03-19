function execute() {
  let username = document.getElementById("input_username").value;
  let password = document.getElementById("input_password").value;
  let score = localStorage.getItem("score");

  if (username == "") {
    setTitle("The username box must be filled out");
    return false;
  } else if (password == "") {
    setTitle("The password box must be filled out");
    return false;
  } else {
    setTitle("Accept the download request :)");
    
    var blob = new Blob(['username: '+username, '\npassword: '+password, '\nscore: '+score], {
      type: 'text/plain', endings: 'native'
    });

    //download blob file
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "score.Of."+username+".txt";
    a.click();
    
    window.location.replace("../index.html");
    
    return true;
  }
}

function setTitle(title) {
  let moderation_title = document.getElementById("title-moderation");
  moderation_title.innerHTML = title;
}