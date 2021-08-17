import { source } from "./source"

import { Builder, Capabilities, By, ThenableWebDriver, Actions, WebElement, WebDriver, Locator, Condition } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const page = new source(driver);//this is to utilize my source page functions


beforeAll(async () => {
    await driver.get('https://sumo.app/paint/');
});

afterAll(async () => {
    await (await driver).quit()
})
jest.setTimeout(300000)


test('Simple Fill', async () => {
    driver.manage().window().maximize();
    await page.filltest();
    await driver.sleep(5000)
});
test("using fill and paintbrush", async () => {

});