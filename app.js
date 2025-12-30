readhtml = document.getElementById('htmlcode');
readcss = document.getElementById('csscode');
readjs = document.getElementById('jscode');

const runbtn = document.getElementById("runbutton");
const outputFrame = document.getElementById('output');


runbtn.addEventListener('click',() => {
    run_html = readhtml.value
    run_css = readcss.value
    run_js = readjs.value
    combined_content = 
    "<html>" +
    "<head>" +
    "<style>" + run_css + "</style>" +
    "</head>" +
    "<body>" +
    run_html +
    "</body>" +
    "<script>" + run_js + "<\/script>"
    "</html>"
    outputFrame.srcdoc = combined_content
})