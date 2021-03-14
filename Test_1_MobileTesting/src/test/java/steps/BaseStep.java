package steps;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pages.*;

public class BaseStep {

    private static AndroidDriver driver = null;

    public BaseStep() throws Exception { }

    public static WebDriver getDriver(){
        return driver;
    }



    public void moveToElementAndClickOnIt(WebElement ele){
        Actions action =new Actions(driver);
        action.moveToElement(ele).click().build().perform();
    }

    public HomePage getHomePage() throws Exception {
        return new HomePage(driver);
    }

}
