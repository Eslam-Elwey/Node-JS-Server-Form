// #server Region

const http = require("http");

const fs = require("fs");

// #region files vars
var formHtmlPage = "";
var bootstrapPage = "";
var fontAwsomePage = "";
var mainCSSPage = "";
var bundleJSPage = "";
var mainJSPage = "";
var iconImage = "";
var formBGImage = "";
var welcomeBGImage = "";
var welcomeHTMLPage = "";
var scriptJSPage = "";
var jsonFilePage = "";

let dataJsonArray = [];

// #endregion

// #region files
fs.readFile("../Client-Side/Pages/form.html", (err, data) => {
  if (err) {
    console.log("Error in Form Html");
  } else {
    formHtmlPage = data;
  }
});

fs.readFile("../Server-Side/clients.json", (err, data) => {
  if (err) {
    console.log("Error in Form Html");
  } else {
    jsonFilePage = data;
  }
});

fs.readFile("../Client-Side/JS/script.js", (err, data) => {
  if (err) {
    console.log("Error in Form Html");
  } else {
    scriptJSPage = data;
  }
});

fs.readFile("../Client-Side/CSS/bootstrap.min.css", (err, data) => {
  if (err) {
    console.log("Error in bootstrap CSS");
  } else {
    bootstrapPage = data;
  }
});

fs.readFile("../Client-Side/CSS/all.min.css", (err, data) => {
  if (err) {
    console.log("Error in FontAwesome CSS");
  } else {
    fontAwsomePage = data;
  }
});

fs.readFile("../Client-Side/CSS/main.css", (err, data) => {
  if (err) {
    console.log("Error in Main CSS");
  } else {
    mainCSSPage = data;
  }
});

fs.readFile("../Client-Side/JS/bootstrap.bundle.min.js", (err, data) => {
  if (err) {
    console.log("Error in bootstrap.bundle.min.js");
  } else {
    bundleJSPage = data;
  }
});

fs.readFile("../Client-Side/JS/main.js", (err, data) => {
  if (err) {
    console.log("Error in main.js");
  } else {
    mainJSPage = data;
  }
});

fs.readFile("../Client-Side/Icons/favicon.ico", (err, data) => {
  if (err) {
    console.log("Error in favicon.ico");
  } else {
    iconImage = data;
  }
});

fs.readFile("../Client-Side/images/polygon-scatter-haikei.svg", (err, data) => {
  if (err) {
    console.log("Error in polygon-scatter-haikei.svg");
  } else {
    formBGImage = data;
  }
});

fs.readFile("../Client-Side/images/wave-haikei.svg", (err, data) => {
  if (err) {
    console.log("Error in wave-haikei.svg");
  } else {
    welcomeBGImage = data;
  }
});

fs.readFile("../Client-Side/Pages/welcome.html", (err, data) => {
  if (err) {
    console.log("Error in welcome.html");
  } else {
    welcomeHTMLPage = data;
  }
});

// #endregion

const PORTNo = process.env.PORT ?? "7500";

const myServer = http.createServer((req, res) => {
  const urlVal = req.url;
  //#region Get
  if (req.method == "GET") {
    switch (urlVal) {
      // Form Page
      case "/":
      case "/form.html":
      case "/Pages/form.html":
      case "/Client-Side/Pages/form.html":
        res.writeHead(200, { "content-type": "text/html" });
        res.write(formHtmlPage.toString());
        break;

      // Bootstrap Css Page
      case "/CSS/bootstrap.min.css":
      case "/Client-Side/CSS/bootstrap.min.css":
        res.writeHead(200, { "content-type": "text/css" });
        res.write(bootstrapPage.toString());
        break;
      // Font Awesome Css Page
      case "/CSS/all.min.css":
      case "/Client-Side/CSS/all.min.css":
        res.writeHead(200, { "content-type": "text/css" });
        res.write(fontAwsomePage.toString());
        break;

      // Main Css Page
      case "/CSS/main.css":
      case "/Client-Side/CSS/main.css":
        res.writeHead(200, { "content-type": "text/css" });
        res.write(mainCSSPage.toString());
        break;

      // Bundled JS Page
      case "/JS/bootstrap.bundle.min.js":
      case "/Client-Side/JS/bootstrap.bundle.min.js":
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(bundleJSPage.toString());
        break;

      // Main JS Page
      case "/JS/main.js":
      case "/Client-Side/JS/main.js":
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(mainJSPage.toString());
        break;

      // Script JS Page
      case "/JS/script.js":
      case "/Client-Side/JS/script.js":
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(scriptJSPage.toString());
        break;

      // json Page
      case "/clients.json":
      case "/Server-Side/clients.json":
        res.writeHead(200, { "content-type": "application/json" });
        res.write(jsonFilePage.toString());
        break;

      // Icon
      case "/Icons/favicon.ico":
      case "/Client-Side/Icons/favicon.ico":
        res.writeHead(200, { "content-type": "image/vnd.microsoft.icon" });
        res.write(iconImage);
        break;

      case "/images/polygon-scatter-haikei.svg":
      case "/Client-Side/images/polygon-scatter-haikei.svg":
        res.writeHead(200, { "content-type": "image/svg+xml" });
        res.write(formBGImage);
        break;

      case "/images/stacked-waves-haikei.svg":
      case "/Client-Side/images/stacked-waves-haikei.svg":
        res.writeHead(200, { "content-type": "image/svg+xml" });
        res.write(welcomeBGImage);
        break;

      case "/welcome.html":
      case "/Pages/welcome.html":
      case "/Client-Side/Pages/welcome.html":
        res.writeHead(200, { "content-type": "text/html" });
        res.write(welcomeHTMLPage.toString());
        break;

        defualt: res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
        break;
    }
    res.end();
  }
  //#endregion

  //#region POST
  else if (req.method == "POST") {
    let dummyRet;
    let dummyFile = "";
    let dataobj = {};
    switch (req.url) {
      case "/welcome.html":
      case "/Pages/welcome.html":
      case "/Client-Side/Pages/welcome.html":
        req.on("data", (data) => {
          console.log(data.toString());

          dummyRet = fs.readFileSync("./clients.json", "utf-8");

          if (!dummyRet) {
            dataJsonArray = [];
          } else {
            dataJsonArray = JSON.parse(dummyRet);
          }

          console.log(typeof dataJsonArray);

          dataobj = handleDataReceived(data.toString());

          dataJsonArray.push(dataobj);

          fs.writeFile(
            "./clients.json",
            JSON.stringify(dataJsonArray),
            (err) => {
              console.log(err);
            }
          );

          dummyFile = welcomeHTMLPage.toString();

          console.log(dataobj.userName);
          console.log(dataobj.phoneNumber);
          console.log(dataobj.userEmail);
          console.log(dataobj.address);

          dummyFile = dummyFile.replace("{clientName}", dataobj.userName);
          dummyFile = dummyFile.replace("{MobileNumber}", dataobj.phoneNumber);
          dummyFile = dummyFile.replace("{Email}", dataobj.userEmail);
          dummyFile = dummyFile.replace("{Address}", dataobj.address);

          // res.write(welcomeHTMLPage.toString());
          // res.end();
        });
        req.on("close", () => {
          console.log("close");
          // res.end();
        });
        req.on("end", () => {
          res.writeHead("200", { "contet-Type": "text/html" });
          // console.log(dummyFile);
          res.write(dummyFile);
          res.end();
        });
        req.on("error", () => {
          console.log("error");
          // res.end();
        });
        break;
    }
  }
  //#endregion

  //#region PUT
  else if (req.method == "PUT") {
    res.end();
  }
  //#endregion

  //#region PATCH
  else if (req.method == "PATCH") {
    res.end();
  }
  //#endregion

  //#region DELETE
  else if (req.method == "DELETE") {
    res.end();
  }
  //#endregion

  //#region wrong url
  else {
    res.write("Please Check Method");
    res.end();
  }
  //#endregion
});

myServer.listen(PORTNo, () => {
  console.log(`listenning on http://localhost:${PORTNo}`);
});

// #endregion

function handleDataReceived(data = "") {
  let dataObj = {};

  let itemArray = [];
  let key;
  let value;

  let dataArr = data.split("&");

  for (var i = 0; i < dataArr.length; i++) {
    [key, value] = dataArr[i].split("=");
    dataObj[key] = value.replace(/\+/g, " ").replace(/%40/g, "@");
  }

  console.log(dataObj);
  return dataObj;
}
