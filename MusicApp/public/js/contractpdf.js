// PDF generation with Pupputeer
const puppeteer = require("puppeteer");
const fs = require("fs-extra");

module.exports = (async function() {
  try {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent("<h1>hello</h1>");
    await page.emulateMedia("screen");
    await page.pdf({
      path: "Doc1.pdf",
      format: "A4",
      printBackground: true
    });

    console.log("done");
    await browser.close();
    
  } catch (e) {
    console.log("our error", e);
  }
})();