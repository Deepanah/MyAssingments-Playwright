const { log } = require("node:console");

function launchBrowser(browserName) {
  
    if(browserName == "chrome"){
        console.log("Chrome browser Lanunched");
    }
    else {
        console.log("Firefox browser Lanunched"); 
    }
}
launchBrowser("chrome")
// launchBrowser("Firefox")

function runTests(testType){
    switch(testType){
        case "Smoke":
        console.log("Smoke test is running");
        break

        case "Regression":
        console.log("Regression test is Running");
        break

        case "Sanity":
        console.log("Sanity test is Running");
        break

        default: 
        console.log("Smoke test will run by default");
    }
}
runTests("Sanity")