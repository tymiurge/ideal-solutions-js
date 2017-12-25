# Injected page objects
T
## references
- http://www.testautomationguru.com/selenium-webdriver-dependency-injection-using-guice/
- http://www.testautomationguru.com/selenium-webdriver-design-patterns-in-test-automation-factory-pattern/

## stack
- guice
- selenium
- testng
## props:
- initialization goes in the providers
- easy to inject page dependencies inside page dependencies

## cons
- no explicit way to manage driver before and after a test execution (i.e. the - quiteDriver in the DriverManager isn't called at all)

## notes
- paths to executable drivers are hardcoded in the <Browser>DriverManager
- had java.lang.NoSuchMethodError (see below) until
-- mvn dependency:tree would have not run
-- all selenium dependencies were not updated to the latests version 
-- latest version of the chromedriver would have not been installed 
-- and **most important:** com.google.guava dependency would have not been specified in the pom

## NoSuchMethodError

```
Connected to the target VM, address: '127.0.0.1:50526', transport: 'socket'
java.lang.NoSuchMethodError: com.google.common.base.Preconditions.checkState(ZLjava/lang/String;Ljava/lang/Object;)V
	at org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:136)
	at org.openqa.selenium.remote.service.DriverService$Builder.usingDriverExecutable(DriverService.java:265)
	at com.tlabas.framework.driver.ChromeDriverManager.startService(ChromeDriverManager.java:20)
	at com.tlabas.framework.driver.DriverManager.getDriver(DriverManager.java:20)
	at com.tlabas.framework.driver.DriverModule.getDriver(DriverModule.java:19)
	at com.tlabas.framework.driver.DriverModule$$FastClassByGuice$$92fb2514.invoke(<generated>)
	at com.google.inject.internal.ProviderMethod$FastClassProviderMethod.doProvision(ProviderMethod.java:272)
	at com.google.inject.internal.ProviderMethod.get(ProviderMethod.java:172)
	at com.google.inject.internal.ProviderInternalFactory.provision(ProviderInternalFactory.java:81)
	at com.google.inject.internal.InternalFactoryToInitializableAdapter.provision(InternalFactoryToInitializableAdapter.java:53)
	at com.google.inject.internal.ProviderInternalFactory.circularGet(ProviderInternalFactory.java:61)
	at com.google.inject.internal.InternalFactoryToInitializableAdapter.get(InternalFactoryToInitializableAdapter.java:45)
	at com.google.inject.internal.SingleParameterInjector.inject(SingleParameterInjector.java:38)
	at com.google.inject.internal.SingleParameterInjector.getAll(SingleParameterInjector.java:62)
	at com.google.inject.internal.ConstructorInjector.provision(ConstructorInjector.java:104)
	at com.google.inject.internal.ConstructorInjector.construct(ConstructorInjector.java:85)
	at com.google.inject.internal.ConstructorBindingImpl$Factory.get(ConstructorBindingImpl.java:267)
	at com.google.inject.internal.SingleFieldInjector.inject(SingleFieldInjector.java:54)
	at com.google.inject.internal.MembersInjectorImpl.injectMembers(MembersInjectorImpl.java:132)
	at com.google.inject.internal.ConstructorInjector.provision(ConstructorInjector.java:114)
	at com.google.inject.internal.ConstructorInjector.construct(ConstructorInjector.java:85)
	at com.google.inject.internal.ConstructorBindingImpl$Factory.get(ConstructorBindingImpl.java:267)
	at com.google.inject.internal.InjectorImpl$2$1.call(InjectorImpl.java:1016)
	at com.google.inject.internal.InjectorImpl.callInContext(InjectorImpl.java:1092)
	at com.google.inject.internal.InjectorImpl$2.get(InjectorImpl.java:1012)
	at com.google.inject.internal.InjectorImpl.getInstance(InjectorImpl.java:1051)
	at org.testng.internal.ClassImpl.getInstanceFromGuice(ClassImpl.java:142)
	at org.testng.internal.ClassImpl.getDefaultInstance(ClassImpl.java:120)
	at org.testng.internal.ClassImpl.getInstances(ClassImpl.java:191)
	at org.testng.TestClass.getInstances(TestClass.java:100)
	at org.testng.TestClass.initTestClassesAndInstances(TestClass.java:86)
	at org.testng.TestClass.init(TestClass.java:78)
	at org.testng.TestClass.<init>(TestClass.java:41)
	at org.testng.TestRunner.initMethods(TestRunner.java:425)
	at org.testng.TestRunner.init(TestRunner.java:252)
	at org.testng.TestRunner.init(TestRunner.java:222)
	at org.testng.TestRunner.<init>(TestRunner.java:163)
	at org.testng.SuiteRunner$DefaultTestRunnerFactory.newTestRunner(SuiteRunner.java:585)
	at org.testng.SuiteRunner.init(SuiteRunner.java:189)
	at org.testng.SuiteRunner.<init>(SuiteRunner.java:136)
	at org.testng.TestNG.createSuiteRunner(TestNG.java:1375)
	at org.testng.TestNG.createSuiteRunners(TestNG.java:1355)
	at org.testng.TestNG.runSuitesLocally(TestNG.java:1209)
	at org.testng.TestNG.runSuites(TestNG.java:1133)
	at org.testng.TestNG.run(TestNG.java:1104)
	at org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)
	at org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)
Disconnected from the target VM, address: '127.0.0.1:50526', transport: 'socket'

Process finished with exit code 0
Empty test suite.

```
## pom 
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.tlabas.app</groupId>
  <artifactId>java-selenium-boilerplate</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>java-selenium-boilerplate</name>
  <url>http://maven.apache.org</url>

  <repositories>
    <repository>
      <id>jcenter</id>
      <name>bintray</name>
      <url>http://jcenter.bintray.com</url>
    </repository>
  </repositories>

  <dependencies>
    <dependency>
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
      <version>23.6-jre</version>
    </dependency>
    <dependency>
      <groupId>com.google.inject</groupId>
      <artifactId>guice</artifactId>
      <version>4.0</version>
    </dependency>
    <dependency>
      <groupId>org.testng</groupId>
      <artifactId>testng</artifactId>
      <version>6.10</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.seleniumhq.selenium</groupId>
      <artifactId>selenium-java</artifactId>
      <version>3.8.1</version>
    </dependency>
    <dependency>
      <groupId>org.seleniumhq.selenium</groupId>
      <artifactId>selenium-server</artifactId>
      <version>3.8.1</version>
    </dependency>
    <dependency>
      <groupId>org.apache.httpcomponents</groupId>
      <artifactId>httpclient</artifactId>
      <version>4.5.3</version>
    </dependency>
    <dependency>
      <groupId>com.googlecode.json-simple</groupId>
      <artifactId>json-simple</artifactId>
      <version>1.1.1</version>
    </dependency>
  </dependencies>

  <properties>
    <browser>firefox</browser>
    <mainUrl>http://localhost:9000/</mainUrl>
    <jdk.level>1.8</jdk.level>
    <selenium.version>3.4.0</selenium.version>
  </properties>

  <build>
    <plugins>

      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.5.1</version>
        <configuration>
          <source>${jdk.level}</source>
          <target>${jdk.level}</target>
        </configuration>
      </plugin>

      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.19.1</version>
        <configuration>
          <systemPropertyVariables>
            <browser>${browser}</browser>
            <webdriver.gecko.driver>/Users/timlabas/dev_tools/geckodriver</webdriver.gecko.driver>
            <webdriver.chrome.driver>/Users/timlabas/dev_tools/chromedriver</webdriver.chrome.driver>
          </systemPropertyVariables>
        </configuration>
      </plugin>


    </plugins>
  </build>


</project>
```
