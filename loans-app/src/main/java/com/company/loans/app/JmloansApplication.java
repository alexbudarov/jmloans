package com.company.loans.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class JmloansApplication {

    public static void main(String[] args) {
        SpringApplication.run(JmloansApplication.class, args);
    }
}
