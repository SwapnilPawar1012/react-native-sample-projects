import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../components/redux/action';
import {useEffect, useState} from 'react';
import products from '../database/ProductsDB';

export const CartController = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [recommendItems, setRecommendItems] = useState<any[]>([]);
  const [itemOccurrence, setItemOccurrence] = useState<{
    [name: string]: number;
  }>({});
  const [totalAmount, setTotalAmount] = useState<number>();

  const dispatch = useDispatch();
  const cartData: any[] = useSelector(
    (reduxState: any) => reduxState.cartReducer,
  );

  const HandleTotalAmount = () => {
    let amount = cartItems.reduce(
      (acc, item) => acc + item.price * itemOccurrence[item.id],
      0,
    );
    setTotalAmount(amount);
  };

  const HandleCartItemStatus = (item: any) => {
    const result = cartData.filter((element: any) => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  };

  // Function to calculate item counts
  const HandleCartItemsCount = () => {
    const counts = cartData.reduce(
      (acc: {[name: string]: number}, item: any) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
      },
      {},
    );
    setItemOccurrence(counts);
  };

  // Function to add an item to the cart
  const HandleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  // Function to remove an item from the cart
  const HandleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item.name));
  };

  // Update item counts and unique items when `cartData` changes
  useEffect(() => {
    HandleCartItemsCount();
    setCartItemCount(cartData.length);

    if (cartData) {
      const uniqueData = Array.from(
        new Set(cartData.flat().map((item: any) => item.id)),
      ).map(id => cartData.flat().find((item: any) => item.id === id));
      setCartItems(uniqueData);
    }

    if (products) {
      const recommendData = products.filter(
        product => !cartData.some(cartItem => cartItem.id === product.id),
      );
      setRecommendItems(recommendData);
    }
  }, [cartData]);

  return {
    cartData,
    isAdded,
    cartItemCount,
    cartItems,
    recommendItems,
    itemOccurrence,
    totalAmount,
    HandleCartItemsCount,
    HandleAddToCart,
    HandleRemoveFromCart,
    HandleCartItemStatus,
    HandleTotalAmount,
  };
};
