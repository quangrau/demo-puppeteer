const puppeteer = require("puppeteer");
const devices = require('puppeteer/DeviceDescriptors');

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Simulator iPhone6 portrait
  await page.emulate(devices['iPhone 6']);

  // Open page
  await page.goto("http://localhost:3000");
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_1.png", fullPage: true });

  // Show list cities
  await page.click('#root > div > div > div > div > div.LayoutContent.LayoutContent--start.ant-layout-content > div > form > div.ant-row.ant-form-item.ant-form-item-no-colon')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_2.png", fullPage: true });

  // Select first city
  await page.click('body > div:nth-child(7) > div > div > div > ul > li:nth-child(1)')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_3.png", fullPage: true });

  // Show list serviceTypes
  await page.click('#root > div > div > div > div > div.LayoutContent.LayoutContent--start.ant-layout-content > div > form > div:nth-child(5)')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_4.png", fullPage: true });

  // Select first serviceType
  await page.click('body > div:nth-child(8) > div > div > div > ul > li')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_5.png", fullPage: true });

  // Fill first name
  await page.type('input#firstName', 'Alex (FAKE)')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_6.png", fullPage: true });

  // Fill last name
  await page.type('input#lastName', 'Le')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_7.png", fullPage: true });

  // Fill phone number
  await page.type('.PhoneInput__input>input', '907328842')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_8.png", fullPage: true });

  // Bypass captcha
  await page.click('#g-recaptcha')
  await page.waitFor(2000);
  await page.screenshot({ path: "screenshots/signup/step_9.png", fullPage: true });

  // Submit
  await page.click('#root > div > div > div > div > div.LayoutContent.LayoutContent--start.ant-layout-content > div > form > div.ant-row.ant-form-item.SignUpForm__submit > div > div > button')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_10.png", fullPage: true });

  browser.close();
  return 'Done!';
};

scrape().then(value => {
  console.log(value); // Success!
});
