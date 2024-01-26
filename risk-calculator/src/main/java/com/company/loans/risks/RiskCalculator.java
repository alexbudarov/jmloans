package com.company.loans.risks;

public class RiskCalculator {

    public double getRisk(String name) {
        return name.hashCode() / 100.0;
    }

}
