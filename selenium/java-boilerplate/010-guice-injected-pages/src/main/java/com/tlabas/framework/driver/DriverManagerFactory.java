package com.tlabas.framework.driver;

public class DriverManagerFactory {

    public DriverManager getManager() {
        DriverManager driverManager;
        String type = System.getProperty("browser", "chrome").toUpperCase();
        if (type == "CHROME") {
            driverManager = new ChromeDriverManager();
        } else {
            driverManager = new ChromeDriverManager();
        }
        return driverManager;
    }

}
