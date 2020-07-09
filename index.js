// index.js
const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

scrape({
    // Provide the URL(s) of the website(s) that you want to clone
    // If multiple URL(s), specify them in single quotes followed by a comma
    // Eg: ['http://localhost/t20', 'http://localhost/t20/about', 'http://localhost/t20/about']
    urls: ['http://localhost/t20'],

    // Specify the path where the content should be saved
    //Directory shouldn't exist
    directory: path.resolve(''),
    // Load the Puppeteer plugin
    plugins: [ 
        new PuppeteerPlugin({     
            launchOptions: { 
                // If you set  this to true, the headless browser will show up on screen
                headless: true
            }, /* optional */
            scrollToBottom: {
                timeout: 10000, 
                viewportN: 10 
            } /* optional */
        })
    ]
});