import com.google.inject.Inject;
import com.tlabas.framework.driver.DriverManager;
import com.tlabas.framework.driver.DriverManagerFactory;
import com.tlabas.framework.driver.DriverModule;
import com.tlabas.framework.pages.Google;
import org.testng.annotations.Guice;
import org.testng.annotations.Test;

@Guice(modules = {DriverModule.class})
public class Test1 {

    @Inject
    Google google;

    @Test
    public void justAnExample() {
        google.goTo();
        System.out.println("ok");
    }
}
