import { TProductProps } from "@/types/types";
import { FaTrash } from "react-icons/fa6";

import { useState } from "react";
import ProductModel from "./ProductModel/ProductModel";

import { useAppDispatch } from "@/Redux/hooks";
import { deleteProduct } from "@/Redux/features/products/productsSlice";
import Swal from "sweetalert2";

const ProductTable = ({ product }: { product: TProductProps }) => {
  const [update, setUpdate] = useState(String);
  const dispatch = useAppDispatch();

  const handleEditBtn = (product: string) => {
    setUpdate(product);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "do you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(product._id));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Product has been Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    console.log("clicked");
  };
  return (
    <tr>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>{product.brand}</td>
      <td className="flex justify-between items-center">
        <div>
          <button>
            {" "}
            <FaTrash
              className="cursor-pointer text-2xl text-red-500"
              onClick={handleDelete}
            />
          </button>
        </div>
        <div>
          <button onClick={() => handleEditBtn(product._id)}>
            <ProductModel update={update}></ProductModel>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
