import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/action';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice: number;
  offerPercentage: number;
  rating: number;
  ratingCount: number;
  tags: string[];
}

export const CartController = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const [itemOccurrence, setItemOccurrence] = useState<{
    [name: string]: number;
  }>({});
  const [totalAmount, setTotalAmount] = useState<number>();
  const [totalOriginalAmount, setTotalOriginalAmount] = useState<number>();
  const [totalDiscountAmount, setTotalDiscountAmount] = useState<number>();

  const dispatch = useDispatch();
  const cartData: Product[] = useSelector(
    (reduxState: any) => reduxState.cartReducer,
  );

  const HandleTotalDiscountAmount = () => {
    let amount = cartItems.reduce(
      (acc, item) =>
        acc +
        (item.originalPrice * itemOccurrence[item.id] -
          item.discountPrice * itemOccurrence[item.id]),
      0,
    );
    setTotalDiscountAmount(amount);
  };

  const HandleTotalOriginalAmount = () => {
    let amount = cartItems.reduce(
      (acc, item) => acc + item.originalPrice * itemOccurrence[item.id],
      0,
    );
    setTotalOriginalAmount(amount);
  };

  const HandleTotalAmount = () => {
    let amount = cartItems.reduce(
      (acc, item) => acc + item.discountPrice * itemOccurrence[item.id],
      0,
    );
    setTotalAmount(amount);
  };

  // Either item added or not (for button)
  const HandleCartItemStatus = (item: any) => {
    const result = cartData.filter((element: any) => {
      return element.id === item.id;
    });
    setIsAdded(result.length > 0);
  };

  const HandleItemOccurrence = () => {
    const counts = cartData.reduce(
      (acc: {[name: string]: number}, item: Product) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
      },
      {},
    );
    setItemOccurrence(counts);
  };

  const HandleAddToCart = (item: Product) => {
    dispatch(addToCart(item));
  };

  const HandleRemoveFromCart = (item: Product) => {
    dispatch(removeFromCart(item.id));
  };

  useEffect(() => {
    HandleItemOccurrence();
    setCartItemCount(cartData.length);

    if (cartData) {
      const uniqueData = Array.from(
        new Set(cartData.map((item: Product) => item.id)),
      ).map(id => cartData.find((item: Product) => item.id === id));
      setCartItems(
        uniqueData.filter((item): item is Product => item !== undefined),
      );
    }
  }, [cartData]);

  return {
    cartData,
    isAdded,
    cartItems,
    cartItemCount,
    itemOccurrence,
    totalAmount,
    totalOriginalAmount,
    totalDiscountAmount,
    HandleAddToCart,
    HandleRemoveFromCart,
    HandleCartItemStatus,
    HandleTotalAmount,
    HandleTotalOriginalAmount,
    HandleTotalDiscountAmount,
  };
};
