import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile_number: { type: String, required: true },
  role: { type: Number, required: true },
  salary: { type: Number, required: true },
  password: { type: String, required: true }
});

const Employee =
  mongoose.models.addemployee || mongoose.model("addemployee", EmployeeSchema);

export default Employee;
