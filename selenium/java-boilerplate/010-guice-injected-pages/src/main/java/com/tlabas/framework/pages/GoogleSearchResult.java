package com.tlabas.framework.pages;

import com.google.inject.Inject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class GoogleSearchResult {

    @FindBy(className = "rc")
    private List results;

    @Inject
    public GoogleSearchResult(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public int getCount() {
        return results.size();
    }

    public void displayResults() {
        /*results.stream()
            .map(WebElement::getText)
            .forEach(System.out::println);
        */
        System.out.println("results");
    }
}
