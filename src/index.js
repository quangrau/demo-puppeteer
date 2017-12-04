const puppeteer = require("puppeteer");

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Simulator iPhone6 portrait
  await page.setViewport({
    width: 375,
    height: 1000,
    isMobile: true
  });

  // Open page
  await page.goto("http://localhost:3000");
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_1.png" });

  // Show list cities
  await page.click('#root > div > div > div > div > div.LayoutContent.LayoutContent--start.ant-layout-content > div > form > div.ant-row.ant-form-item.ant-form-item-no-colon')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_2.png" });

  // Select first city
  await page.click('body > div:nth-child(7) > div > div > div > ul > li:nth-child(1)')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_3.png" });

  // Show list serviceTypes
  await page.click('#root > div > div > div > div > div.LayoutContent.LayoutContent--start.ant-layout-content > div > form > div:nth-child(5)')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_4.png" });

  // Select first serviceType
  await page.click('body > div:nth-child(8) > div > div > div > ul > li')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_5.png" });

  // Fill first name
  await page.type('input#firstName', 'Alex (FAKE)')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_6.png" });

  // Fill last name
  await page.type('input#lastName', 'Le')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_7.png" });

  // Fill phone number
  await page.type('.PhoneInput__input>input', '907328842')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_8.png" });

  // Bypass captcha
  await page.click('#g-recaptcha')
  await page.waitFor(2000);
  await page.screenshot({ path: "screenshots/signup/step_9.png" });

  // Submit
  await page.click('#root > div > div > div > div > div.LayoutContent.LayoutContent--start.ant-layout-content > div > form > div.ant-row.ant-form-item.SignUpForm__submit > div > div > button')
  await page.waitFor(250);
  await page.screenshot({ path: "screenshots/signup/step_10.png" });

  browser.close();
  return 'Done!';
};

scrape().then(value => {
  console.log(value); // Success!
});
