import { source } from "./source"
import { Builder, Capabilities, By, ThenableWebDriver, Actions, WebElement, WebDriver, Locator, Condition, TouchSequence, } from "selenium-webdriver"
// import { del } from "selenium-webdriver/http";



const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const page = new source(driver);//this is to utilize my source page functions
const colornumber: By = By.xpath("//*[@id='rc-editable-input-7']");
const agreeclick: By = By.xpath('//*[@id="main-container"]/div[1]/div/div[2]/div/form/div[5]/div/div/label');
const createaccountbutton: By = By.xpath("//*[@id='main-container']/div[1]/div/div[2]/div/form/div[6]/button");
const actions = driver.actions({async: true});

beforeAll(async () => {
    await driver.get('https://www.sumopaint.com/');
});

afterAll(async () => {
    await (await driver).quit()
})
test("create account", async  () => {
    await driver.manage().window().maximize();
await page.createaccount();
await page.typename("Mega Man");
await page.typeemail("mega@megloman.com")
await page.typepassword("passsssswoooorrrrd");
await page.typere_password("passsssswoooorrrrd");
await driver.findElement(agreeclick).click();
await driver.findElement(createaccountbutton).click();
});
