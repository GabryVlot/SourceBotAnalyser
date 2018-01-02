osArray=["Internet Explorer","Firefox","Chrome","Chromium","Safari","MacIntel","Win32","Win64","Windows","WinNT","OSX","Linux","eval"];

var driverArray=["__driver_evaluate","__webdriver_evaluate","__selenium_evaluate","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__selenium_unwrapped","__fxdriver_unwrapped","__webdriver_script_function","__webdriver_script_func","__webdriver_script_fn"];
var webBotArray=["_Selenium_IDE_Recorder","_phantom","_selenium","callPhantom","callSelenium","__nightmare"];

    getOSXVersion=function(vsParam)
    {
        return (vsParam== "O")?["Snow Leopard","Lion/Mountain Lion","Yosemite","Mavericks"]:[]
    }


let interval = 2;
console.log(interval++ * 200);