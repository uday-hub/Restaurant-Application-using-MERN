import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, phone, email, date, time } = req.body;
  if (!firstName || !lastName || !phone || !email || !date || !time) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }
  try {
    await Reservation.create({firstName, lastName, phone, email, date, time});
    res.status(200).
      json({
        success: true,
        message: "Reservation Sent Successfully!",
      });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }
    return next(error);
  }
};
