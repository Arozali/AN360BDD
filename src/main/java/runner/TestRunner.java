package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="/Users/arozali/Desktop/AN360BDD/src/main/java/features/covid19.feature",
        dryRun= false,
//		glue= {"stepDefinitions"},
//		plugin={"pretty","html:test-output"}
//		)
        plugin = { "json:target/cucumber.json","html:target/cucumber", "rerun:target/cucumber/rerun.txt"},
        monochrome = true,
        glue = { "stepDefinitions" })
       // tags = { "@Honeywell" })

public class TestRunner {

}
