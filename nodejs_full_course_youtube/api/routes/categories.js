const express = require("express");
const router = express.Router();
const Categories = require("../db/models/Categories");
const Response = require("../lib/Response");
const CustomError = require("../lib/Error");
const Enum = require("../config/Enum");

/**
CRUD NEDİR? 
Create -> POST > OLUŞTURMA
Read -> GET > OKUMA
Update -> PUT > GÜNCELLEME
Delete -> DELETE > SİLME
 */

/* GET categories listing. */
router.get("/", async (req, res) => {
  try {
    const categories = await Categories.find({});
    res.json(Response.successResponse(categories));
  } catch (error) {
    let errorResponse = Response.errorResponse(error);
    res.status(errorResponse.code).json(errorResponse);
  }
});

// POST /api/categories
router.post("/add", async (req, res) => {
  let body = req.body;

  try {
    if (!body.name) {
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error",
        "Name field must be filled",
      );
    }

    let category = new Categories({
      name: body.name,
      is_active: true,
      created_by: req.user?._id,
    });

    await category.save();
    res.json(Response.successResponse({ success: true }));
  } catch (error) {
    let errorResponse = Response.errorResponse(error);
    res.status(errorResponse.code).json(errorResponse);
  }
});

// PUT /api/categories/update
router.post("/update", async (req, res) => {
  let body = req.body;

  try {
    if (!body._id) {
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error",
        "id field must be filled",
      );
    }

    let updates = {};
    if (body.name) {
      updates.name = body.name;
    }

    if (typeof body.is_active === "boolean") {
      updates.is_active = body.is_active;
    }

    await Categories.updateOne({ _id: body._id }, updates);
    res.json(Response.successResponse({ success: true }));
  } catch (error) {
    let errorResponse = Response.errorResponse(error);
    res.status(errorResponse.code).json(errorResponse);
  }
});

// DELETE /api/categories/delete
router.post("/delete", async (req, res) => {
  let body = req.body;

  try {
    if (!body._id)
      throw new CustomError(
        Enum.HTTP_CODES.BAD_REQUEST,
        "Validation Error",
        "id field must be filled",
      );

    await Categories.deleteOne({ _id: body._id }); // remove() yerine deleteOne()
    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

module.exports = router;
