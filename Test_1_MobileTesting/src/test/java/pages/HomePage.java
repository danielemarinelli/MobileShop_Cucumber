package pages;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class HomePage {

    AndroidDriver driver=null;

    public HomePage(AndroidDriver driver){
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }

    public void openApplication(){
        try {
            DesiredCapabilities dc = new DesiredCapabilities();
            dc.setCapability("deviceName","emulator-5554");
            dc.setCapability("platformName","Android");
            dc.setCapability("platformVersion","8");
            dc.setCapability("appPackage","com.aphixsoftware.pocketshopapp");
            dc.setCapability("appActivity","com.aphixsoftware.pocketshopapp.MainActivity");
            driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"),dc);
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    public void verifyLogIn(String u, String pw){
        MobileElement el1 = (MobileElement) driver.findElementByXPath("//android.webkit.WebView[@content-desc=\"PocketShop\"]/android.view.View[3]/android.view.View/android.widget.EditText");
        el1.click();
        el1.sendKeys(u);
        MobileElement el2 = (MobileElement) driver.findElementByXPath("//android.webkit.WebView[@content-desc=\"PocketShop\"]/android.view.View[4]/android.view.View/android.widget.EditText");
        el2.click();
        el2.sendKeys(pw);
    }

    public void clickLogInButton(){
        MobileElement el3 = (MobileElement) driver.findElementByAccessibilityId("LOGIN ");
        el3.click();
    }

    public void clickButtonTermConditions() {
        MobileElement el4 = (MobileElement) driver.findElementByAccessibilityId("AGREE ");
        el4.click();
    }

    public void accessToAccount() {
        System.out.println("#####I am in my account!!###");
        List<MobileElement> els5 = (List<MobileElement>) driver.findElementsByXPath("(//android.view.View[@content-desc=\"3\"])[1]/android.widget.Button");
        els5.get(0).click();
    }

    public void clickCartButton() {
        System.out.println("###### Clicked on my cart ####");
        List<MobileElement> els6 = (List<MobileElement>) driver.findElementsByXPath("//android.webkit.WebView[@content-desc=\"PocketShop\"]/android.view.View[3]/android.widget.Button[2]");
        els6.get(0).click();
    }

    public void selectProduct(){
        System.out.println("###### Added one item ####");
        List<MobileElement> els7 = (List<MobileElement>) driver.findElementsByXPath("//android.webkit.WebView[@content-desc=\"PocketShop\"]/android.view.View[4]");
        System.out.println(" ###@@@@###@@@ " +els7.get(0).getText());
    }

    public void verifyCloseApp() { driver.quit(); }


}
