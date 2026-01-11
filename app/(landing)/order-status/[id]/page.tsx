"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
    const [isConfirmed, setConfirmed] = useState(false);

    return (
        <main className="bg-gray-100 min-h-screen flex flex-col">
            <div className="pagar-konten py-20 pt-32 pb-2 flex-grow">
                <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
            </div>
            <div className="flex justify-center mb-20">
                {/* Kirim fungsi setConfirmed sebagai props */}
                {isConfirmed ? (
                    <OrderConfirmed />
                ) : (
                    <OrderSubmitted onRefresh={() => setConfirmed(true)} />
                )}
            </div>
        </main>
    );
};

export default OrderStatus;