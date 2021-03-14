package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LogInSteps extends BaseStep{

    public LogInSteps() throws Exception {
    }

    @Given("User opens pocketshop app")
    public void user_opens_pocketshop_app() throws Exception {
        getHomePage().openApplication();
    }

    @When("^User inserts (.*?) and (.*?)$")
    public void user_inserts_username_and_password(String u, String pw) throws Exception {
        getHomePage().verifyLogIn(u,pw);
            }

    @Then("User navigate to own account")
    public void user_navigate_to_own_account() throws Exception {
        getHomePage().accessToAccount();
    }

    @And("User clicks on login button")
    public void userClicksOnLoginButton() throws Exception {
        getHomePage().clickLogInButton();
    }

    @And("User agree to term conditions")
    public void userAgreeToTermConditions() throws Exception {
        getHomePage().clickButtonTermConditions();
    }

    @And("User clicks on cart button")
    public void userClicksOnCartButton() throws Exception {
        getHomePage().clickCartButton();
    }

    @And("User selects a product")
    public void userSelectsAProduct() throws Exception {
        getHomePage().selectProduct();
    }

    @Then("The product selected is in the cart")
    public void theProductSelectedIsInTheCart() {
        System.out.println("The product is in the cart");
    }

    @And("User closes the app")
    public void userClosesTheApp() throws Exception {
        getHomePage().verifyCloseApp();
    }
}
