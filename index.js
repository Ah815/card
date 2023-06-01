//update profile
var profile = document.getElementById('profile')
var input_file = document.getElementById('input-file')
input_file.onchange = function(){
    profile.src = URL.createObjectURL(input_file.files[0]);
}

var box1 = document.querySelectorAll('.box1')
var btn = document.querySelector('.btn')
var currentitem = 0;
btn.addEventListener('click',addmorebtn)
function addmorebtn(){
    for(var i =currentitem; i <currentitem+1; i++){
        if(box1[i]){
            box1[i].style.display ='inline-block'
        }
    }
    currentitem +=1;
    if(currentitem>=box1.length){
        event.target.style.display ='none'
    }
}