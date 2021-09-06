import { source } from "./source"
import { Builder, Capabilities, By, ThenableWebDriver, Actions, WebElement, WebDriver, Locator, Condition, TouchSequence, } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const page = new source(driver); //this is to utilize my source page functions

const agreeclick: By = By.xpath('//*[@id="main-container"]/div[1]/div/div[2]/div/form/div[5]/div/div/label');
const createaccountbutton: By = By.xpath("//*[@id='main-container']/div[1]/div/div[2]/div/form/div[6]/button");

jest.setTimeout(10000)
beforeAll(async () => {
    await driver.get('https://sumo.app/');
});

afterAll(async () => {
    await (await driver).quit()
})
test("create account", async  () => {
    await driver.manage().window().maximize();
await page.createaccount();
await page.typename("Mega Man"); //The text in parenthesis can be changed to whatever you want
await page.typeemail("mega@megloman.com")
await page.typepassword("passsssswoooorrrrd");
await page.typere_password("passsssswoooorrrrd");
await driver.findElement(agreeclick).click();
await driver.findElement(createaccountbutton).click();
});
