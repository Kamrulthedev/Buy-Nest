import { useEffect } from "react";
import { useAppSelector } from "@/Redux/hooks";
import { cardProduct } from "@/Redux/features/products/cardSlice";

const usePageRefreshWarning = () => {
  const cartItems = useAppSelector(cardProduct);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        const confirmationMessage =
          "You have items in your cart. Are you sure you want to leave?";
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);
};

export default usePageRefreshWarning;
