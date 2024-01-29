module.exports = async function (context, req) {
    context.log('Order Processing Function triggered.');

    // Parse request body
    const { orderId, items } = req.body;

    // Validate input parameters
    if (!orderId || !items || !Array.isArray(items)) {
        context.res = {
            status: 400,
            body: "Invalid input format"
        };
        return;
    }

    // Process each item
    items.forEach(item => {
        context.log(`${item} order processing started`);
    });

    // Return success response
    context.res = {
        status: 200,
        body: "Order processing completed"
    };
};
