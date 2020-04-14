package stepDefinitions;


import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

public class HoneywellStepDefinition {

      WebDriver driver;
    @And("^I scorll down to PRODUCTS & SERVICES$")
    public void i_scorll_down_to_PRODUCTS_SERVICES() {

        //driver.navigate().to("https://services.alarmnet.com/AlarmNet360/AlarmNetDirectV");

         WebDriver driver=new ChromeDriver();
         driver.manage().window().maximize();
          driver.manage().timeouts().implicitlyWait( 4,TimeUnit.SECONDS );
         ((JavascriptExecutor)driver).executeScript("scroll(0,400)");

    }
    @When("^I click on Honeywell Home$")
    public void i_click_on_Honeywell_Home() throws InterruptedException {
        //driver.manage().timeouts().implicitlyWait( 4,TimeUnit.SECONDS );

        driver.findElement( By.xpath( "//a[contains(text(),'Honeywell Home')]" ) ).click();
        driver.manage().timeouts().implicitlyWait( 4,TimeUnit.SECONDS );


    }

    @Then("^I should see Honeywell home page$")
    public void i_should_see_Honeywell_home_page() {

        driver.findElement(By.cssSelector("body")).sendKeys(Keys.CONTROL +"t");
        driver.get("https://www.security.honeywellhome.com/");


    }

    @And("^I validate Honeywell home page logo$")
    public void i_validate_Honeywell_home_page_logo() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


}
