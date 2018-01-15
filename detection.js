var fs = require('fs');
var url = require('url');
var http = require('http');
var https = require('http');
var beautify = require('js-beautify').js_beautify;
var _ = require('underscore');

const path = require('path')
const mkdirp = require('mkdirp');
const patterns = JSON.parse(fs.readFileSync('patterns.json', 'utf8'));
var rootPath;
var sourcePath;
var outputResult = {};
var processed = 0;
var pending = 0;

"use strict";
//const seed = {"URL": "https://www.stubhub.com", "name": "stubhub", "searchElement": "app-container"};
//const seed = {"URL": "http://localhost:63342/selenium/artefacts/config2/chrome_BLOCKED/stubhub.html?_ijt=p40grf6712n1q8rta19dot435c", "name": "stubhub", "searchElement": "app-container"};
const seed = {"URL": "http://www.infojobs.net", "name": "infojobs", "searchElement": "logo-home-1"};

var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
var chromeOptions = new chrome.Options();

//GOOGLE CHROME
chromeOptions.setChromeBinaryPath('/usr/bin/google-chrome');
chromeOptions.addArguments(["--start-maximized", "user-data-dir=/home/vlot/google-chrome/Default"]);

//CHROMEDRIVER FIX
//chromeOptions.setChromeBinaryPath('/home/vlot/UnDetectableCDC/chrome');
//chromeOptions.addArguments(["--start-maximized", "user-data-dir=/home/vlot/.config/chromium/Default"]);

//chromeOptions.addArguments(['--disable-extensions', "--start-maximized", "--disable-local-storage", "user-data-dir=/home/vlot/google-chrome/Default", "--incognito"]);
var browser = new webdriver.Builder().usingServer().withCapabilities(chromeOptions.toCapabilities()).build();
function findTutsPlusLink() {
    return browser.findElements(webdriver.By.id(seed.searchElement)).then(function(result) {
        // if (result.length > 0)
        //  console.log('result', result)
        return result[0];
    });
}

function downloadFile(file_url, index){
    try{
        const secure = file_url.toLowerCase().startsWith('https') ? true : false;

        var options = {
            host: url.parse(file_url).host,
            port: 80,//secure ? 443 : 80,
            path: url.parse(file_url).pathname
        };

        var file_name = url.parse(file_url).pathname.split('/').pop() || ('unknown_'+ index);
        var file = fs.createWriteStream(sourcePath + '/' + file_name );
        var module = secure ? https : http;
        module.get(options, function(res) {
            res.on('data', function(data) {
                file.write(data);
            }).on('end', function() {
                file.end();
                console.log(file_name + ' downloaded');
                deObfuscate(file_name)
            }).on('error', function(err){
                console.log('exception', file_name, err)
                processed++;
            });
        });

    }catch(e){
        console.log('fatal', e);
    }
}

function checkPattern(data, pattern){
    const retValue = (data.toLowerCase().indexOf(pattern.toLowerCase()) !== -1);

    return retValue;
}

function gatherResults(name, data){
    const patternTopics = ["Distil", "Captcha", "WebBot", "Navigator", "Browser", "Graphics"]
    const beautifiedData = (beautify(data, { indent_size: 2 }));
    if (!beautifiedData)
        console.log('could not deobfuscate', name);

    function prerequists(topic){
        if (!outputResult[name])
            outputResult[name] = {};

        if (topic && !outputResult[name][topic]){
            outputResult[name][topic] = { "original": {}, "deObfuscated":{}}
        }
    }

    _.each(patternTopics, function(topic){
        _.each(patterns.searchPatterns[topic], function(pattern){
            if (checkPattern(data, pattern)) {
                prerequists(topic);
                outputResult[name][topic].original[pattern] = true;
            }

            if (beautifiedData) {
                if (checkPattern(beautifiedData, pattern)) {
                    prerequists(topic);
                    outputResult[name][topic].deObfuscated[pattern] = true;
                }
            }
             //console.log('gatherresults', pattern, (outputResult[topic]) ? outputResult[topic].deObfuscated[pattern] : '', outputResult[topic] ?  outputResult[topic].original[pattern] : '');
        });
    });

    const pattern = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g
    const hexPattern = /\\x([0-9A-Fa-f]{2})/g;
    const uglyIp = data.match(pattern);
    const isHex = beautifiedData.match(hexPattern);
    const beautyIp = beautifiedData.match(pattern);

    if (uglyIp && uglyIp.length > 0){
        prerequists();
        outputResult[name]['originalIp'] = JSON.stringify(uglyIp);
       // console.log(JSON.stringify(uglyIp));
    }
    if (beautyIp && beautyIp.length > 0){
        prerequists();
        outputResult[name]['deObfuscatedIp'] = JSON.stringify(beautyIp);
       // console.log(JSON.stringify(beautyIp));
    }
    if (isHex && isHex.length > 0)
    {
        let hexTranslated = '';
        _.each(isHex, function(hex){
            hexTranslated += hex.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
                return String.fromCharCode(parseInt(arguments[1], 16));
            });
        });

        if (hexTranslated.length > 0){
            //console.log('hextrans', hexTranslated);
            gatherResults(name, hexTranslated);
        }
    }
    //console.log('output results', JSON.stringify(outputResult, null, 2));
    return beautifiedData;
}

function deObfuscate(fileName){
    var input;
    if (fileName === 'zwxsutztwbeffxbyzcquv.js')
        input = './fromBrowser/' + fileName;
    else
        input = sourcePath + '/' + fileName;
    const targetPath = sourcePath + '/' + fileName + '_deObfuscated.js';
    fs.readFile(input, 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        const beautifiedData = gatherResults(fileName, data);

        try{
            fs.writeFileSync(targetPath, beautifiedData);
        } catch (e){
            console.log('could not write file', e);
        } finally {
          processed++;
        }

        if (processed === pending){
            try{
                fs.writeFileSync(rootPath + '/RESULTS.json', JSON.stringify(outputResult, undefined, 2));
            }
            catch(ex){
                console.log('results could not be written', ex);
            }
            finally{
              //  browser.quit();
            }
        }
    });
}

function closeBrowser() {
    setTimeout(function(){
        console.log ('Searching for elemens....')
            //Scripts
        browser.findElements(webdriver.By.tagName('script')).then(function(el){
            if (el) {
                pending = el.length + 1; //source page

                //Main page
                browser.getPageSource().then(function(indexHtml){
                    const sourcePageFileName = 'index.html';
                    fs.writeFileSync(sourcePath + '/' + sourcePageFileName, indexHtml, { encoding: 'utf8' });
                    deObfuscate(sourcePageFileName);
                });
                                
                for (var i = 0; i < el.length; i++) {
                    var webElement = el[i];
                    webElement.getAttribute('src').then(function (src) {
                        if (src) {
                            downloadFile(src, i);
                        }
                        else{
                            webElement.getAttribute('outerHTML').then(function(html){
                                const fileName = 'inner_script' + Math.floor(Math.random() * 1024) + pending + '.html';
                                fs.writeFileSync(sourcePath + '/' + fileName, html);
                                deObfuscate(fileName);

                            });
                        }

                    });
                }
            }
        });
    }, 12000)
}

function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}

// fs.readFile('scripts/async.js', 'utf8', function (err, data) {
//     if (err) {
//         throw err;
//     }
//     const beautifiedData = gatherResults('async.js', data);
// });
// return;

constructPath('./scripts/' + seed.name + '/', function(oPath){
    browser.get(seed.URL);
    browser.wait(findTutsPlusLink, 600000).then(closeBrowser, handleFailure);
// browser.findElement(webdriver.By.name('q')).sendKeys('tuts+ code');
// browser.findElement(webdriver.By.name('btnG')).click();
});

function constructPath(prefix, callBack){
    const date = new Date();
    const pathPrefix = prefix + date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + '/';
    const pathPostFix= date.toISOString().split('T')[1];
    rootPath = pathPrefix + pathPostFix;
    console.log('rootpath', rootPath);
    sourcePath = rootPath + '/sources';
    mkdirp(path.resolve(sourcePath), function(err){
        if (err)
            console.log('Error creating dir ', err);
        else
            callBack(rootPath);
    })
}

