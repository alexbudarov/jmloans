package com.company.loans.app;

import com.company.loans.risks.RiskCalculator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@ConfigurationPropertiesScan
public class JmloansApplication {

    public static void main(String[] args) {
        SpringApplication.run(JmloansApplication.class, args);
    }

    @Bean
    public RiskCalculator riskCalculator() {
        return new RiskCalculator();
    }
}
