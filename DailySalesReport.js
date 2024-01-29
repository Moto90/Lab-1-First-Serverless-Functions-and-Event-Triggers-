module.exports = async function (context, req) {
    context.log('Daily Sales Report Function triggered.');

    // Generate a random number between 1 and 100
    const salesCount = getRandomNumber(1, 100);

    // Create the sales report
    const salesReport = `Today, ${salesCount} sales made.`;

    // Log the report
    context.log(salesReport);

    // Return the report in the response
    context.res = {
        status: 200,
        body: salesReport
    };
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
