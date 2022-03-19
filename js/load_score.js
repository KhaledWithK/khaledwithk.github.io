const blob = null;

function openFilePicker(){
  let real_picker = document.getElementById("file_picker");
  real_picker.click();
}

function setFileName(name){
  const name_title = document.getElementById("file-name");
  name_title.innerHTML = name;
}

function onTextUpdate(){
  let real_picker = document.getElementById("file_picker");
  let selected_txt_name_title = document.getElementById("file-name");
  
  let name = real_picker.value;
  selected_txt_name_title.innerHTML = name;
  
  blob = real_picker.value;
}