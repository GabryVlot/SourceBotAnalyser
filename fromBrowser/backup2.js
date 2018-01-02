
function track(){
    console.log('@Starting to track');
    var webBotIntergerRepresentation=0,arrayInstance=null,webBotLiteral=null;
    var driverArray=["__driver_evaluate","__webdriver_evaluate","__selenium_evaluate","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__selenium_unwrapped","__fxdriver_unwrapped","__webdriver_script_function","__webdriver_script_func","__webdriver_script_fn"];
    var webBotArray=["_Selenium_IDE_Recorder","_phantom","_selenium","callPhantom","callSelenium","__nightmare"];
    try
    {
        for(arrayInstance in webBotArray)
        {
            webBotLiteral = webBotArray[arrayInstance];
            if(window[webBotLiteral])
            {
                console.log('@Window', webBotLiteral);
                webBotIntergerRepresentation= "300"
            }
        };
        for(arrayInstance in driverArray)
        {
            webBotLiteral= driverArray[arrayInstance];
            if(window["document"][webBotLiteral])
            {
                console.log('@Window[Document]', arrayInstance);
                webBotIntergerRepresentation= "300"
            }
        };
        for(arrayInstance in window["document"])
        {
            if(arrayInstance["match"](/\$[a-z]dc_/)&& window["document"][arrayInstance]["cache_"])
            {
                console.log('@Window[Document][' + arrayInstance + ']', arrayInstance);
                webBotIntergerRepresentation= "300"
            }
        }
    }
    catch(e)
    {
    };
    try
    {
        if(!webBotIntergerRepresentation&& window["external"]&& window["external"].toString()&&
            (window["external"].toString()["indexOf"]("Sequentum")!=  -1))
        {
            console.log('Sequentum');
            webBotIntergerRepresentation= "400"
        }
    }
    catch(e)
    {
    };
    try
    {
        if((!webBotIntergerRepresentation) && window["document"]["documentElement"]["getAttribute"]("selenium"))
        {
            webBotIntergerRepresentation= "500"
        }
        else
        {
            if((!webBotIntergerRepresentation) && window["document"]["documentElement"]["getAttribute"]("webdriver"))
            {
                webBotIntergerRepresentation= "600"
            }
            else
            {
                if((!webBotIntergerRepresentation) && window["document"]["documentElement"]["getAttribute"]("driver"))
                {
                    webBotIntergerRepresentation= "700"
                }
            }
        }
    }
    catch(e)
    {
    };
}
