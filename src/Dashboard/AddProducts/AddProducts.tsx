import { Button } from "@/components/ui/button";
import Heading from "@/Heading/Heading";
import { useCrateProductsMutation } from "@/Redux/features/products/productsApi";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddProducts = () => {
  const [createProduct] = useCrateProductsMutation();
  const { handleSubmit, register } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const addProduct = {
      body: data,
    };
    const res = await createProduct(addProduct).unwrap();
    console.log("res", res);
  };
  return (
    <div className="w-5/6 mx-auto my-20">
      <Heading Heading="Add new Products"></Heading>
      <div className=" md:grid grid-cols-2 gap-4  py-4">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                className="w-full rounded-lg p-2 border border-slate-400"
                {...register("title", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="image">Image Link:</label>
              <input
                type="text"
                id="image"
                className="w-full rounded-lg p-2 border border-slate-400"
                {...register("image", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                className="w-full rounded-lg p-2 border border-slate-400"
                id="price"
                {...register("price", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                className="w-full rounded-lg p-2 border border-slate-400"
                id="description"
                {...register("description", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="brand">Brand:</label>
              <input
                type="text"
                className="w-full rounded-lg p-2 border border-slate-400"
                id="brand"
                {...register("brand", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="availableQuantity">Available Quantity:</label>
              <input
                type="number"
                className="w-full rounded-lg p-2 border border-slate-400"
                id="availableQuantity"
                {...register("availableQuantity", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                className="w-full rounded-lg p-2 border border-slate-400"
                id="rating"
                {...register("rating", { required: true })}
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <Button type="submit" className="bg-primary-gradient">
                Update Product
              </Button>
            </div>
          </form>
        </div>
        <div>
          <img
            src="https://kbdfans.com/cdn/shop/files/3000_e6dbbdb6-4bc4-4b7a-b9d5-fdb3099fb6c5_1512x.jpg?v=1718932600"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
