## Use a MySQL database in a Spring Boot Web Application through Hibernate

See here for demo: 
http://ec2-52-221-238-204.ap-southeast-1.compute.amazonaws.com:8080/index.html#/

Spring Boot reference
http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/



### Usage

- Run the application and go on http://localhost:8080/

### Build and run

#### Configurations

Open the `application.properties` file and set your own configurations for the
database connection.

#### Prerequisites

- Java 7
- Maven 3

#### From terminal

Go on the project's root folder, then type:

    $ mvn spring-boot:run

#### From Eclipse (Spring Tool Suite)

Import as *Existing Maven Project* and run it as *Spring Boot App*.



#### Creating an executable jar
- Save your pom.xml and run mvn package from the command line.
- If you look in the target directory you should see myproject-0.0.1-SNAPSHOT.jar.
- To run that application, use the java -jar command.
    $ java -jar target/myproject-0.0.1-SNAPSHOT.jar


