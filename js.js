let changeTimer = function() {
  setInterval( () => {
    let time = document.getElementById("time").innerHTML;
    document.getElementById("time").innerHTML = time - 1;
  }, 1000);
};

document.addEventListener("DOMContentLoaded", function(){
  changeTimer();
});
