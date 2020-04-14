package stepDefinitions;


import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ImageStepDefinition {

    WebDriver driver;

    @Given("^I see three images on different box$")
    public void i_see_three_images_on_different_box() {
        WebElement ImageFile = driver.findElement(By.xpath("/html[1]/body[1]/div[2]/section[2]/aside[1]/article[1]/img[1]"));
        Boolean ImagePresent = (Boolean) ((JavascriptExecutor)driver).executeScript("return arguments[0].complete && typeof arguments[0].naturalWidth != \"undefined\" && arguments[0].naturalWidth > 0", ImageFile);
        if (!ImagePresent)     {          System.out.println("Image not displayed.");     }
        else     {         System.out.println("Image displayed.");     }

    }
}