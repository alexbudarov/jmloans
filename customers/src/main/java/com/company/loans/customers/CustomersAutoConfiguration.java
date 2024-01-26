package com.company.loans.customers;

import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.Import;

@AutoConfiguration
@Import({CustomersConfiguration.class})
@AutoConfigurationPackage(basePackageClasses = CustomersConfiguration.class)
@AutoConfigureBefore(JpaRepositoriesAutoConfiguration.class)
public class CustomersAutoConfiguration {
}
