package com.company.loans.app.controller;

import com.company.loans.app.domain.Loan;
import com.company.loans.app.domain.LoanRepository;
import com.company.loans.customers.domain.Customer;
import com.company.loans.customers.domain.CustomerRepository;
import com.company.loans.risks.RiskCalculator;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class LoanController {

    private final CustomerRepository customerRepository;

    private final RiskCalculator riskCalculator;

    private final LoanRepository loanRepository;

    public LoanController(CustomerRepository customerRepository,
                          RiskCalculator riskCalculator,
                          LoanRepository loanRepository) {
        this.customerRepository = customerRepository;
        this.riskCalculator = riskCalculator;
        this.loanRepository = loanRepository;
    }

    @QueryMapping(name = "risk")
    public double getRisk(@Argument Loan loan) {
        if (loan.getCustomer() == null) {
            return -1.0;
        }

        Customer customer = customerRepository.findById(loan.getCustomer().getId())
                .orElseThrow();

        double result = riskCalculator.getRisk(customer.getName());
        return result;
    }

    @MutationMapping(name = "updateLoan")
    public Loan save(@Argument @NonNull Loan input) {
        if (getRisk(input) > 1000) {
            return null;
        }
        return loanRepository.save(input);
    }

    @NonNull
    @QueryMapping(name = "loanList")
    public List<Loan> findAll() {
        return loanRepository.findAll();
    }
}