import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.get("/v2", (req, res) => {
  res.json({
    message: "v2 - 👋🌎🌍🌏",
  });
});

export default router;
