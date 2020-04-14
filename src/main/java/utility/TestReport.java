package utility;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class TestReport {
    public static void main(String[] args) throws Throwable {

        File reportOutputDirectory = new File("target");
        List<String> jsonFiles = new ArrayList<String>();
        jsonFiles.add("target/cucumber.json");
        String buildNumber = "VERSION  1.2.80.2794";
        String projectName = "Test Automation";
        Configuration configuration = new Configuration(reportOutputDirectory, projectName);

        configuration.setBuildNumber(buildNumber);

        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
        Reportable result = reportBuilder.generateReports();
        System.out.println("===================================================");
        System.out.println("****** Report Generation Completed ****************");
        System.out.println("===================================================");
        System.out.println("No of Features Passed:=" + result.getPassedFeatures());
        System.out.println("No of Features Failed:=" + result.getFailedFeatures());
        System.out.println("===================================================");
    }
}

