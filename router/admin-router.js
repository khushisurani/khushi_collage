const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router
  .route("/contacts/:id")
  .get(authMiddleware, adminMiddleware, adminController.getContactById);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

router
  .route("/contacts/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateContactById);

router
  .route("/orders")
  .get(authMiddleware, adminMiddleware, adminController.getAllOrder);

router
  .route("/orders/:id")
  .get(authMiddleware, adminMiddleware, adminController.getOrderById);

router
  .route("/orders/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteOrderById);

router
  .route("/orders/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateOrderById);

router
  .route("/products")
  .get(authMiddleware, adminMiddleware, adminController.getAllProduct);

router
  .route("/products/:id")
  .get(authMiddleware, adminMiddleware, adminController.getServiceById);

router
  .route("/products/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteProductById);

router
  .route("/products/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateProductById);

module.exports = router;
