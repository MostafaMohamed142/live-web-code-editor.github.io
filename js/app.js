document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";
// get text area
var html = document.getElementById("htmlCode")
var css = document.getElementById("cssCode")
var js = document.getElementById("jsCode")
// Load saved code from localStorage
const savedHtmlCode = localStorage.getItem("html");
if (savedHtmlCode) {
  html.value = savedHtmlCode;
}

const savedCssCode = localStorage.getItem("css");
if (savedCssCode) {
  css.value = savedCssCode;
}

const savedJsCode = localStorage.getItem("js");
if (savedJsCode) {
  js.value = savedJsCode;
}
// add event listener to store text area value in local storage
html.addEventListener("input",()=>{
    localStorage.setItem('html',html.value)
})
css.addEventListener("input",()=>{
    localStorage.setItem('css',css.value)
})
js.addEventListener("input",()=>{
    localStorage.setItem('js',js.value)
})

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
