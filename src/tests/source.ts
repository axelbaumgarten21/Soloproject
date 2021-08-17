import { By, until, WebDriver } from "selenium-webdriver";


    export class source {
        driver: WebDriver;
        url: string = "https://sumo.app/paint/";


fillbutton: By = By.xpath("//*[@id='tool-9']");
paintbrush: By = By.xpath("//*[@id='tool-5']");
canvas: By = By.xpath("//*[@id='canvasWrapper']");
color: By = By.xpath("//*[@id='toolsNavWrapper']/div[1]/div[1]/div/div");
colornumber: By = By.xpath("//*[@id='rc-editable-input-7']");
colorokbutton: By = By.xpath("//*[@id='root']/div/div/div[2]/div[5]/div[1]/div/div[2]/div[3]/div/div[2]/div[1]")

        

constructor(driver: WebDriver) {
  this.driver = driver;
}
async sendKeys(elementBy: By, keys) {
  await this.driver.wait(until.elementLocated(elementBy));
  return this.driver.findElement(elementBy).sendKeys(keys);
}
async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }
async filltest() {
  await this.driver.wait(until.elementLocated(this.color)).click();
  await this.driver.wait(until.elementLocated(this.colornumber)).click();
  await this.sendKeys(this.colornumber, 25325);
  await this.driver.wait(until.elementLocated(this.colorokbutton)).click();
  await this.driver.wait(until.elementLocated(this.fillbutton)).click();
  await this.driver.wait(until.elementLocated(this.canvas)).click();
}
async usebrush() {
  await this.driver.wait(until.elementLocated(this.paintbrush)).click();
  await this.driver.wait(until.elementLocated(this.colornumber)).click();
  await this.sendKeys(this.colornumber, 745632);
  await this.driver.wait(until.elementLocated(this.colorokbutton)).click();
  await this.driver.wait(until.elementLocated(this.canvas)).click()
}
// async navigate() {
//   await this.driver.get(this.url);
//   await this.driver.wait(until.elementLocated(this.homepage));
//   await this.driver.wait(
//     until.elementIsVisible(await this.driver.findElement(this.homepage))
//   );
// }

  // async getResults() {
  //   return this.getText(this.homepage);
  // }

  // async doSearch(text: string) {
  //   return this.sendKeys(this.searchbox, `${text}`);
  // }
  // async getsearchresults() {
  //   return this.getText(this.searchresults)
  // }
}