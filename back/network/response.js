// Function to custom success messages
const success = (req, res, message, status) => {
  const statusCode = status || 200;
  const statusMessage = message || "";

  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: {
      message: statusMessage,
    },
  });
};

// Function to custom error messages
const error = (req, res, message = "Internal Server Error", status = 500) => {
  res.status(status).send({
    error: true,
    status: status,
    body: {
      message,
    },
  });
};

module.exports = {
  success,
  error,
};
