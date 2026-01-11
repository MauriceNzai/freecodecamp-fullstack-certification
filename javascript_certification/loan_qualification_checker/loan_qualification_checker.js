#!/usr/bin/node

/**
 * Determines loan eligibility based on annual income and credit score.
 *
 * @param {number} annualIncome - Applicant's annual income
 * @param {number} creditScore - Applicant's credit score
 * @returns {string} Loan qualification message
 */
function getLoanMessage(annualIncome, creditScore) {
  const loanRequirements = {
    duplex: { minIncome: 60000, minCreditScore: 700 },
    condo: { minIncome: 45000, minCreditScore: 680 },
    car: { minIncome: 30000, minCreditScore: 650 }
  };

  if (
    annualIncome >= loanRequirements.duplex.minIncome &&
    creditScore >= loanRequirements.duplex.minCreditScore
  ) {
    return "You qualify for a duplex, condo, and car loan.";
  }

  if (
    annualIncome >= loanRequirements.condo.minIncome &&
    creditScore >= loanRequirements.condo.minCreditScore
  ) {
    return "You qualify for a condo and car loan.";
  }

  if (
    annualIncome >= loanRequirements.car.minIncome &&
    creditScore >= loanRequirements.car.minCreditScore
  ) {
    return "You qualify for a car loan.";
  }

  return "You don't qualify for any loans.";
}

module.exports = {
	getLoanMessage,
};
