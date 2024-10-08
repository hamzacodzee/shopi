import connectToMongo from "@/lib/db";
import Product from "@/lib/models/ProductModel";
import Customer from "@/lib/models/CustomerModel";
import { NextResponse } from "next/server";
import Employee from "@/lib/models/EmployeeModel";
import Manufacturer from "@/lib/models/ManufacturerModel";
import Deleted from "@/lib/models/DeletedModel";

export async function POST(request) {
  await connectToMongo();

  try {
    let modalToUse;
    const { modal_to_pass, id } = await request.json();

    if (!modal_to_pass || !id) {
      return NextResponse.json(
        { success: false, error: "Type and ID are required" },
        { status: 400 }
      );
    }

    if (modal_to_pass === "product") {
      modalToUse = Product;
    } else if (modal_to_pass === "customer") {
      modalToUse = Customer;
    } else if (modal_to_pass === "employee") {
      modalToUse = Employee;
    } else if (modal_to_pass === "manufacturer") {
      modalToUse = Manufacturer;
    } else {
      return NextResponse.json(
        { err: 1, success: false, msg: "Invalid Modal" },
        { status: 400 }
      );
    }

    const entity = await modalToUse.findById(id);

    if (!entity) {
      return NextResponse.json(
        {
          err: 1,
          success: false,
          msg: `${modal_to_pass.charAt(0).toUpperCase() +
            modal_to_pass.slice(1)} not found`
        },
        { status: 404 }
      );
    }
    await modalToUse.findByIdAndDelete(id);

    await Deleted.create({
      imageId: entity.image
    });

    const data = await modalToUse.find();

    return NextResponse.json(
      {
        data: data || [],
        err: 0,
        success: true,
        msg: `Delete ${modal_to_pass} successfully!`
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { err: 1, success: false, msg: error.message },
      { status: 500 }
    );
  }
}
