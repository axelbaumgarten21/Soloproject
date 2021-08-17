import { source } from "./source"

import { Builder, Capabilities, By, ThenableWebDriver, Actions, WebElement, WebDriver, Locator, Condition } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const page = new source(driver);

// const missions: By = By.xpath("//span[text()='Missions']");
// const artemis: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[1]/a");
// const artemisnasabutton: By = By.xpath("//*[@src='img/nasa-logo.png']"); //the locator for the nasa logo differs in this mission page for some reason. AB
// const commercial: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[2]/a");
// const juno: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[6]/a");
// const mars: By = By.xpath("//a[text()='Curiosity Mars Rover']");
// const hubble: By = By.xpath("//a[text()='Hubble Space Telescope']");
// const james: By = By.xpath("//a[text()='James Webb Space Telescope']");
// const spaceStation: By = By.xpath("//a[text()='International Space Station']");
// const insight: By = By.xpath("//a[text()='InSight Mars Lander']");
// const perseverance: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[9]/a");
// const pluto: By = By.xpath("//a[text()='New Horizons: Pluto and Beyond']");
// const osiris: By = By.xpath("//a[text()='OSIRIS-REx Asteroid Mission']");
// const parker: By = By.xpath("//a[text()='Parker Solar Probe']");
// const launches: By = By.xpath("//a[text()='Launches and Landings']");
// const allmissions: By = By.xpath("//a[text()='All Missions A-Z']");
// const allmissionsnasabutton: By = By.xpath("//img[@src='/sites/all/themes/custom/nasatwo/images/nasa-logo.svg']");//the locator for the nasa logo differs in this mission page for some reason. AB
// const nasalogobutton: By = By.xpath("//*[@alt='NASA logo']")





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