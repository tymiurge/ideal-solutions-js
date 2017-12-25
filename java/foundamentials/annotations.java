/**
PURPOSES:
 - Compiler instructions
 - Build-time instructions
 - Runtime instructions

 BUILD TIME:
 Annotations might be used to 
 - includes generating source code, 
 - compiling the source, 
 - generating XML files (e.g. deployment descriptors), 
 - packaging the compiled code and files into a JAR file etc. 
 Building the software is typically done by an automatic build tool like Apache Ant or Apache Maven. 
 Build tools may scan your Java code for specific annotations and generate source code or other files 
 based on these annotations

 COMPILER INSTRUCTIONS (there are 3 built-in instractions):
    @Deprecated
    @Override
    @SuppressWarnings
    -- etc. etc. 
*/