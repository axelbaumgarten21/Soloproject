import { source } from "./source"
import { Builder, Capabilities, By, ThenableWebDriver, Actions, WebElement, WebDriver, Locator, Condition, TouchSequence, } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const page = new source(driver);//this is to utilize my source page functions

const colornumber: By = By.xpath("//*[@id='rc-editable-input-7']");
const actions = driver.actions({async: true});

//Before each test it will navigate to the url below
beforeEach(async () => {
    await driver.get('https://sumo.app/');
});
//This will close the page after all the tests are complete
afterAll(async () => {
    await (await driver).quit()
})
//Setting the timeout this way allows the test to run fully without throwing a timeout code
jest.setTimeout(40000);

test('Simple Fill', async () => {
    driver.manage().window().maximize();
    await page.gotoapp();
    await driver.sleep(5000);
    await page.selectcolor();
    driver.findElement(colornumber).click();
    await driver.sleep(2000)
    await page.changecolor();
    await page.redfill();
    await driver.sleep(2000);
});
test("using paintbrush", async () => {
    driver.manage().window().maximize();
    await page.gotoapp();
    await page.selectcolor();
    await page.changecolor();
    await page.changeflownumber();
    await page.usebrush();
});