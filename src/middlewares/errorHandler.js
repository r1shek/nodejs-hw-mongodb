import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    // Если ошибка является экземпляром HttpError
    res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Для всех остальных ошибок
    res.status(500).json({
      status: 500,
      message: err.message || 'Something went wrong',
    });
  }
};
