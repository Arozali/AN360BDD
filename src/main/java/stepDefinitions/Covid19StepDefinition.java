package stepDefinitions;

import com.sun.xml.internal.bind.v2.runtime.output.StAXExStreamWriterOutput;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Covid19StepDefinition {

     WebDriver driver;

    @Given("^I am on AN(\\d+) website$")
    public void i_am_on_AN_website(int arg1){
        System.setProperty("webdriver.chrome.driver","/Users/arozali/Desktop/AN360BDD/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://services.alarmnet.com/AlarmNet360/AlarmNetDirectV");
        //driver.switchTo().window( "2" )
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait( 3, TimeUnit.SECONDS );
    }

    @When("^I click on covid(\\d+) link$")
    public void i_click_on_covid_link(int arg1)  {

    driver.findElement( By.xpath( "//*[@id=\"alertReadMore\"]" ) ).click();
    driver.manage().timeouts().implicitlyWait( 3, TimeUnit.SECONDS );
    }

    @And("^I should see popup \"([^\"]*)\"$")
    public void i_should_see_popup(String arg1) throws InterruptedException {
     String title= driver.findElement( By.xpath( "//div[@id='readMoreAlertType']//span[@id='alertType']" ) ).getText();
     System.out.println("The title is " +title);
        Assert.assertEquals( "SCHEDULED MAINTENANCE",title );
       Thread.sleep( 3000 );
    }

    @Then("^I close the display message$")
    public void i_close_the_display_message()  {
       driver.findElement( By.xpath( "/html/body/div[9]/div[3]/div/button" ) ).click();

       driver.quit();
    }




}
