readhtml = document.getElementById('htmlcode');
readcss = document.getElementById('csscode');
readjs = document.getElementById('jscode');

const runbtn = document.getElementById("runbutton");
const outputFrame = document.getElementById('output');

function runCode() {
    const run_html = readhtml.value;
    const run_css = readcss.value;
    const run_js = readjs.value;

    const combined_content =
    "<html>" +
    "<head>" +
      "<style>" +
        run_css +
        "#error{color:red;font-family:monospace;padding:10px;}" +
      "</style>" +
    "</head>" +
    "<body>" +

      "<div id='error'></div>" +
      run_html +

      "<script>" +
        "window.onerror = function(message, source, line) {" +
          "document.getElementById('error').innerText =" +
          "'Error: ' + message + ' (line ' + line + ')';" +
        "};" +
      "<\/script>" +

      "<script>" +
        run_js +
      "<\/script>" +

    "</body>" +
    "</html>";

    outputFrame.srcdoc = combined_content;
   // storing data in local storage.

    localStorage.setItem("htmlcode", run_html);
    localStorage.setItem("csscode", run_css);
    localStorage.setItem("jscode", run_js); 
}



// reading data after refreshing page.
readhtml.value = localStorage.getItem("htmlcode") || "";
readcss.value  = localStorage.getItem("csscode") || "";
readjs.value   = localStorage.getItem("jscode") || "";
runCode()

runbtn.addEventListener('click',runCode);
readhtml.addEventListener("input",runCode);
readcss.addEventListener("input",runCode);
readjs.addEventListener("input",runCode);

