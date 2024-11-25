import express from "express";
import { ScheduleController } from "./schedule.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.RECEPTIONIST, UserRole.ADMIN),
  ScheduleController.insertIntoDB
);

router.get(
  '/',
  auth(UserRole.RECEPTIONIST, UserRole.ADMIN, UserRole.DOCTOR),
  ScheduleController.getAllFromDB
);

router.get(
  '/:id',
  auth(UserRole.RECEPTIONIST, UserRole.ADMIN, UserRole.DOCTOR),
  ScheduleController.getByIdFromDB
);

router.delete(
  '/:id',
  auth(UserRole.RECEPTIONIST, UserRole.ADMIN),
  ScheduleController.deleteFromDB
);

export const ScheduleRoutes = router;
