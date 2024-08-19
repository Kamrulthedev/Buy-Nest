import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SubmitHandler, useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { IFormInput, TProductProps } from "@/types/types";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  getSingleProduct,
  singleProductFromState,
  updateProductIntoState,
} from "@/Redux/features/products/productsSlice";

const ProductModel = ({ update }: { update: string }) => {
  const dispatch = useAppDispatch();

  // get single product using is  update props means id
  useEffect(() => {
    dispatch(getSingleProduct(update));
  }, [dispatch, update]);

  const product = useAppSelector(singleProductFromState) as TProductProps;

  const { register, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      brand: "",
      availableQuantity: 0,
      rating: 0,
    },
  });

  useEffect(() => {
    // add model default valuse
    if (product) {
      reset({
        title: product.title,
        price: product.price,
        description: product.description,
        brand: product.brand,
        availableQuantity: product.availableQuantity,
        rating: product.rating,
      });
    }
  }, [product, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    dispatch(updateProductIntoState({ ...product, ...data }));
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            update to your product here. Click update when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" className="bg-primary-gradient">
                  Update Product
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModel;
