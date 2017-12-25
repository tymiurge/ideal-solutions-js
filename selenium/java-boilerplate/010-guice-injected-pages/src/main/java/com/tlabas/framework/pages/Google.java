package com.tlabas.framework.pages;

import com.google.inject.Inject;
import com.google.inject.name.Named;
import org.openqa.selenium.WebDriver;

public class Google {

    private final WebDriver driver;

    //@Inject
    //@Named("application.url")
    private  String URL = "https://www.google.com";

    @Inject
    private GoogleSearchWidget searchBox;

    @Inject
    private GoogleSearchResult searchResult;

    @Inject
    public Google(WebDriver driver) {
        this.driver = driver;
    }

    public void goTo() {
        this.driver.get(this.URL);
    }

    public GoogleSearchWidget getSearchWidget() {
        return searchBox;
    }

    public GoogleSearchResult getResults() {
        return searchResult;
    }

}
