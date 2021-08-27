import { source } from "./source"
import { Builder, Capabilities, By, ThenableWebDriver, Actions, WebElement, WebDriver, Locator, Condition, TouchSequence, } from "selenium-webdriver"
import { del } from "selenium-webdriver/http";



const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const page = new source(driver);//this is to utilize my source page functions

const colornumber: By = By.xpath("//*[@id='rc-editable-input-7']");
var handlePromise;

const actions = driver.actions({async: true});
const kb = actions.keyboard();
const mouse = actions.mouse();
const coloredit: By = By.xpath("//*[@id='rc-editable-input-7']");
const subscribebutton: By = By.xpath("//*[@id='ele44']");
const signinbutton: By = By.xpath("//*[@class='signin-btn']");



beforeAll(async () => {
    await driver.get('https://www.sumopaint.com/');
});

afterAll(async () => {
    await (await driver).quit()
})
jest.setTimeout(40000);


test('Simple Fill', async () => {
    driver.manage().window().maximize();
    await page.gotoapp();
    await page.selectcolor();
    driver.findElement(colornumber).click();
    await driver.sleep(5000)
    driver.findElement(colornumber).click;
    await driver.findElement(colornumber).isSelected();
    driver.findElement(colornumber);   
    driver.findElement(colornumber).clear();
    driver.findElement(colornumber).clear();
    await page.redfill();
    await driver.sleep(2000);
});
test("using fill and paintbrush", async () => {
    driver.manage().window().maximize();
    await page.gotoapp();
    await page.selectcolor();
    driver.findElement(colornumber).click();
    await driver.sleep(5000)
    driver.findElement(colornumber).click;
    await driver.findElement(colornumber).isSelected();
    driver.findElement(colornumber);   
    driver.findElement(colornumber).clear();
    driver.findElement(colornumber).clear();
    await page.redfill();
    await driver.sleep(2000);
    await page.
});
// test("login to account", async  () => {
//     await driver.manage().window().maximize();
// // String parentwindow = driver.getWindowHandle();
//     await driver.findElement(subscribebutton).click();
//     await driver.sleep(5000);
//     await driver.switchTo().frame(1048);
// // String childWindow = driver.getWindowHandle();
// //      await driver.switchTo().window(childWindow);
//     await driver.findElement(signinbutton).click();
// });

