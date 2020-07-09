# website-scraper
Generates Static Pages from a website by extracting the HTML, CSS &amp; JS source code. This project utilizes [puppeteer](https://github.com/GoogleChrome/puppeteer).

This module is an Open Source Software maintained by one developer in free time.

Requirements: 
* NodeJS (install it here: https://nodejs.org/en/download/

## Instructions
#### 1. Clone this project or download as a ZIP file
#### 2. Extract the folder to your desired location
#### 3. Update the index.js file to scrape your desired URL(s) -- further instructions exist in the comments
#### 4. Open Command Prompt in the root folder of the project and run the following command: 

```sh
node index.js
``` 

## How it works
It starts Chromium in headless mode which just opens page and waits until page is loaded.
It is far from ideal because probably you need to wait until some resource is loaded or click some button or log in. Currently this module doesn't support such functionality.

## Notes:
This project has been extended from [website-scraper-pupeteer](https://github.com/website-scraper/website-scraper-puppeteer/)  

Default Timeout values have been changed to better facilitate large websites
