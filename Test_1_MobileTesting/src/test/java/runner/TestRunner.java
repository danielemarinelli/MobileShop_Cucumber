package runner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"src/test/java/features"},
        glue = {"steps"},
        plugin = {"pretty","html:target/cucumber-reports"},
        tags = {"@MobileTesting"}
)

public class TestRunner {

}
