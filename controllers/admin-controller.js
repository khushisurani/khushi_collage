const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Service = require("../models/service-model");
const Order = require("../models/order-model");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllProduct = async (req, res, next) => {
  try {
    // Get query parameters for pagination
    const limit = parseInt(req.query.limit) || 5; // Default limit
    const page = parseInt(req.query.page) || 1; // Default page

    // Calculate the number of documents to skip
    const skip = (page - 1) * limit;

    // Fetch products with pagination
    const products = await Service.find({}).limit(limit).skip(skip).exec();

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Contact.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Order.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Service.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    return res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    await Order.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProductData = req.body;

    const updatedData = await Service.updateOne(
      { _id: id },
      {
        $set: updateProductData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// const updateProductById = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const updateProductData = req.body;

//     if (req.file) {
//       updateProductData.image = `/uploads/${req.file.filename}`; // Save the image path
//     }

//     const updatedData = await Service.updateOne({ _id: id }, { $set: updateProductData });

//     res.status(200).json({ message: "Product updated successfully", data: updatedData });
//   } catch (error) {
//     console.error("Error in updateProductById:", error);
//     res.status(500).json({ message: "Failed to update product", error });
//   }
// };

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const updateContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateContactData = req.body;

    const updatedData = await Contact.updateOne(
      { _id: id },
      {
        $set: updateContactData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const updateOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateOrderData = req.body;

    const updatedData = await Order.updateOne(
      { _id: id },
      {
        $set: updateOrderData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  updateOrderById,
  getUserById,
  updateUserById,
  getOrderById,
  deleteContactById,
  getAllProduct,
  deleteProductById,
  deleteOrderById,
  updateProductById,
  updateContactById,
  getContactById,
  getAllOrder,
  getServiceById,
};
