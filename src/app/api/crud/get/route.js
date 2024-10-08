import connectToMongo from "@/lib/db";
import { NextResponse } from "next/server";
import Product from "@/lib/models/ProductModel";
import Customer from "@/lib/models/CustomerModel";
import Employee from "@/lib/models/EmployeeModel";
import Manufacturer from "@/lib/models/ManufacturerModel";

export async function POST(request) {
  await connectToMongo();
  try {
    let modalToUse;
    let data = [];
    const { modal_to_pass, field_options=[] } = await request.json();

    if (modal_to_pass === "Customers") {
      modalToUse = Customer;
    } else if (modal_to_pass === "Products") {
      modalToUse = Product;
    } else if (modal_to_pass === "Employees") {
      modalToUse = Employee;
    } else if (modal_to_pass === "Manufacturers") {
      modalToUse = Manufacturer;
    } else {
      return NextResponse.json(
        { data: [], err: 1, success: false, msg: "Invalid Modal" + error.message, },
        { status: 400 }
      );
    }

    const modifiedOptionKeys = field_options?.join(" ");
    data = await modalToUse.find().select(modifiedOptionKeys);

    return NextResponse.json(
      {
        data: data || [],
        err: 0,
        success: true,
        msg: `Get ${modal_to_pass} Succesfuly`
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: [], err: 1, success: false, msg: error.message },
      { status: 500 }
    );
  }
}
