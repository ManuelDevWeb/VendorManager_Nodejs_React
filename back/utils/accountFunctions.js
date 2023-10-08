const submissionPriceWithRange = (account, start, end) => {
  const submissionPrice = account.map((account) => {
    let sum = 0;

    account.Buyer.forEach((agreement) => {
      agreement.Submissions.forEach((submission) => {
        const paymentDate = new Date(submission.paymentDate).getMonth() + 1;

        if (paymentDate >= start && paymentDate <= end) {
          sum += submission.price;
        }
      });
    });

    return {
      id: account.id,
      firstName: account.firstName,
      lastName: account.lastName,
      profession: account.profession,
      amountPaid: parseFloat(sum.toFixed(2)),
    };
  });

  return submissionPrice;
};

module.exports = {
  submissionPriceWithRange,
};
