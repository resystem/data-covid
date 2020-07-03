/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */ 
const puppeteer = require('puppeteer');

const uri = 'https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR:pt-419';

exports.onCreateDevServer = ({ app }) => {
  app.get('/data', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(uri);
  
    data = await page.evaluate(() => {
      // eslint-disable-next-line no-undef
      const elements = document.querySelectorAll('div > div > div > table > tbody > tr');
      const brazilColumns = elements[2].querySelectorAll('td');
      const globalColumns = elements[0].querySelectorAll('td');
  
      return {
        global_cases: {
          confirmed: parseInt(globalColumns[0].textContent.replace(/[.]/g, ''), 10),
          per_million: parseInt(globalColumns[2].textContent.replace(/[.]/g, ''), 10),
          recovered: parseInt(globalColumns[3].textContent.replace(/[.]/g, ''), 10),
          deaths: parseInt(globalColumns[4].textContent.replace(/[.]/g, ''), 10),
        },
        brazil_cases: {
          confirmed: parseInt(brazilColumns[0].textContent.replace(/[.]/g, ''), 10),
          per_million: parseInt(brazilColumns[2].textContent.replace(/[.]/g, ''), 10),
          recovered: parseInt(brazilColumns[3].textContent.replace(/[.]/g, ''), 10),
          deaths: parseInt(brazilColumns[4].textContent.replace(/[.]/g, ''), 10),
        },
      }
    });
    
    await browser.close();
    res.send(data);
  });
};

