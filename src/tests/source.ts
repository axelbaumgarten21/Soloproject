import { Browser, By, Key, until, WebDriver } from "selenium-webdriver";






    export class source {
        driver: WebDriver;
        url: string = "https://sumo.app/paint/";

fillbutton: By = By.xpath("//*[@id='tool-9']");
paintbrush: By = By.xpath("//*[@id='tool-5']");
canvas: By = By.xpath("//*[@id='canvasWrapper']");
color: By = By.xpath("//*[@id='toolsNavWrapper']/div[1]/div[1]/div/div");
colornumber: By = By.xpath("//*[@id='rc-editable-input-7']");
colorokbutton: By = By.xpath("//*[@id='root']/div/div/div[2]/div[5]/div[1]/div/div[2]/div[3]/div/div[2]/div[1]");
paintonlinebutton: By = By.xpath("//*[@id='ele33']");
clickout: By = By.xpath("//*[@id='install-pwa-background']");
colorbar: By = By.xpath("//*[@id='root']/div/div/div[2]/div[5]/div[1]/div/div[2]/div[2]/div/div");
colorbox: By = By.xpath("//*[@id='root']/div/div/div[2]/div[5]/div[1]/div/div[2]/div[1]/div/div/div[2]/div");
red: By = By.xpath("//*[@id='rc-editable-input-4']");
signinbutton: By = By.xpath("//*[@id='signinbutton']");
createnewaccountbutton: By = By.xpath("//*[@id='desc']/a[1]")
redcolornumberbox: By = By.xpath("//*[@value='A60606']");
flownumber: By = By.xpath("//*[@id='toolsNavWrapper']/div[1]/div[3]/div/div[1]/input");
name: By = By.xpath("//*[@id='name']");
email: By = By.xpath("//*[@id='email']");
password: By = By.xpath("//*[@id='password']");
repassword: By = By.xpath("//*[@id='password_confirmation']");



        

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

async selectcolor() {
  await this.driver.wait(until.elementLocated(this.color)).click();
} 
async createaccount() {
  await this.driver.wait(until.elementLocated(this.signinbutton)).click();
  await this.driver.wait(until.elementLocated(this.createnewaccountbutton)).click();
}
async redfill() {
  await this.sendKeys(this.colornumber, "A60606");
  await this.driver.wait(until.elementLocated(this.colorokbutton)).click();
  await this.driver.wait(until.elementLocated(this.fillbutton)).click();
  await this.driver.wait(until.elementLocated(this.canvas)).click();
}
async clicky() {
  await this.driver.wait(until.elementLocated(this.clickout)).click();
}
async changecolor() {
  this.driver.findElement(this.colornumber).click;
  await this.driver.findElement(this.colornumber).isSelected();
  this.driver.findElement(this.colornumber);   
  this.driver.findElement(this.colornumber).clear();
  this.driver.findElement(this.colornumber).clear();
}
async changeflownumber() {
  this.driver.findElement(this.flownumber).click;
  await this.driver.findElement(this.flownumber).isSelected();
  this.driver.findElement(this.flownumber);
  this.driver.findElement(this.flownumber).clear();
  this.driver.findElement(this.flownumber).clear();
}
async usebrush() {
  await this.sendKeys(this.colornumber, "0000");
  await this.sendKeys(this.flownumber, "100");
  await this.driver.wait(until.elementLocated(this.colorokbutton)).click();
  await this.driver.wait(until.elementLocated(this.paintbrush)).click();
  await this.driver.wait(until.elementLocated(this.paintbrush)).click();
  await this.driver.wait(until.elementLocated(this.canvas)).click();
  await this.driver.wait(until.elementLocated(this.canvas)).click();
}
async gotoapp() {
  await this.driver.wait(until.elementLocated(this.paintonlinebutton)).click();
}
async typename(text: string) {
  return this.sendKeys(this.name, `${text}`);
}
async typeemail(text: string) {
  return this.sendKeys(this.email, `${text}`);
}
async typepassword(text: string) {
  return this.sendKeys(this.password, `${text}`);
}
async typere_password(text: string) {
  return this.sendKeys(this.repassword, `${text}`);
}
// async navigate() {
//   await this.driver.get(this.url);
//   await this.driver.wait(until.elementLocated(this.homepage));
//   await this.driver.wait(
//     until.elementIsVisible(await this.driver.findElement(this.homepage))
//   );
// }

  // async getResults() {
  //   return this.getText(this.redcolornumberbox);
  // }

  // async doSearch(text: string) {
  //   return this.sendKeys(this.searchbox, `${text}`);
  // }
  // async getsearchresults() {
  //   return this.getText(this.searchresults)
  // }
  
}
