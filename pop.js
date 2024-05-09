const iframe = document.querySelector("iframe");
const inDownload = document.getElementById("inDownload");
let click = 0;
function link(e){
  const myLink = ["//grunoaph.net/4/6867690","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2"];
  const randomValue = myLink[Math.floor(Math.random() * myLink.length)];
  setTimeout(function(){
    document.location.href = e;
  }, 10);
  window.open(randomValue, "_blank");
}

function download(e){
click++;
console.log(click);
if(click == 1){
  const myLink = ["//https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2"];
  const randomValue = myLink[Math.floor(Math.random() * myLink.length)];
  window.open(randomValue, "_blank");
  } else {
    window.open(e, "_blank");
  }
}

window.onload = function() {
const div = document.createElement('div');
    div.style.width = "100%";
    div.style.height = "720px";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.right = "0";
    div.style.zIndex = "9999";
    div.onclick = function(){
      const myLink = ["//https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2","https://shope.ee/5fSUFnHhg2"];
  const randomValue = myLink[Math.floor(Math.random() * myLink.length)];
  window.open(randomValue, "_blank");
      div.style.display = "none";
    }
    document.body.appendChild(div);
}
