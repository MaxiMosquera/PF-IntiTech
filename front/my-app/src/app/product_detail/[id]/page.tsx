"use client";
import { product_by_id } from "@/helpers/products.helper";
import { Iproducts_props } from "@/interfaces/interfaces";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { addToCartItem } from "@/components/cart/cartMenu";
import axios from "axios";

interface Idetail_props {
  params: {
    id: string;
  };
}

const Product_detail: React.FC<Idetail_props> = ({ params }) => {
  const [data_product, setData_product] = useState<Iproducts_props | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [itemId, setItemId] = useState<string>("");
  const [cartId, setCartId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedDataUser = localStorage.getItem('DataUser');
    if (storedDataUser) {
      const dataUser = JSON.parse(storedDataUser);
      const cartId = dataUser.cart?.id;
      if (cartId) {
        setCartId(cartId);
        console.log('este es el cartId', cartId);
      } else {
        console.error('Cart ID not found in user data');
      }
    } else {
      console.error('No user data found in localStorage');
    }
  }, []);

  useEffect(() => {
       const get_product_by_id = async () => {
      try {
        const product = await product_by_id(params.id);
        if(product) {
          setData_product(product);   
        }
      } catch (error) {
        console.error("Error en product_detail", error);
      }
    };
    get_product_by_id();
  }, []);

  const handleAddToCart = async () => {
    setLoading(true);
    setError(null);
    try {
      if (cartId) {
        const response = await addToCartItem(cartId, params.id, quantity);
        console.log("Item added:", response);
        alert("Item added to cart successfully!");
      } else {
        console.error("Cart ID is null");
      }
    } catch (error) {
      setError("Error adding item to cart");
      console.error('este es el error',error);
    } finally {
      setLoading(false);
    }
  };

  if (!data_product) {
    return (
      <div className="h-screen mt-32 text-4xl text-center bg-custom-image bg-no-repeat bg-size-200">
        ...Cargando
      </div>
    );
  }

  return (
    <div className="bg-black bg-opacity-10">
      <div className="flex justify-center items-center">
        <div className="my-32  rounded-lg shadow-lg w-full max-w-4xl">
          <div className="bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-300 rounded-lg shadow-lg w-full max-w-4xl flex">
            <div className="relative w-1/2 h-[450px]">
              <Image
                className="object-cover w-full h-full"
                src={data_product.image}
                alt="Product Image"
                layout="fill"
              />
            </div>

            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-2xl py-5 font-semibold text-gray-900">
                    {data_product.brand}
                  </h1>
                  <span className="text-gray-600 text-sm">
                    Stock: {data_product.stock}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {data_product.model}
                </h2>

                <p className="text-sm text-gray-700 mb-4">
                  {data_product.description}
                </p>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-900 font-semibold">
                    $ {data_product.price}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-600">
                    Daily Generation: {data_product.dailyGeneration}
                  </span>
                </div>

                {/* Botón "Añadir al carrito" */}
                <div className="mt-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={loading}
                    className="w-full outline-1 outline text-black bg-transparent hover:bg-yellow-500 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded"
                  >
                    {loading ? "Adding..." : "Añadir al carrito"}
                  </button>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_detail;
