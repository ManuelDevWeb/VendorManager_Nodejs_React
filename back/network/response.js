// Function to custom success messages
const success = (req, res, message, status, data) => {
  const statusCode = status || 200;
  const statusMessage = message || "";
  const dataResponse = data || null;

  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: {
      message: statusMessage,
      data: dataResponse,
    },
  });
};

// Function to custom error messages
const error = (
  req,
  res,
  message = "Internal Server Error",
  status = 500,
  data = null
) => {
  res.status(status).send({
    error: true,
    status: status,
    body: {
      message,
      data,
    },
  });
};

module.exports = {
  success,
  error,
};
