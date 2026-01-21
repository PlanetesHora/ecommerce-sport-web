
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";
import { getTransactionById } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected";

const OrderStatus = async ({ params }: TPageProps) => {
  const { id } = await params;

  const transaction = await getTransactionById(id);
  console.log("transaction", transaction);

    return (
        <main className="bg-gray-100 min-h-screen flex flex-col">
            <div className="pagar-konten py-20 pt-32 pb-2 flex-grow">
                <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
            </div>
            <div className="flex justify-center mb-20">
                {transaction.status === "pending" && <OrderSubmitted onRefresh={() => window.location.reload()} />}
                {transaction.status === "paid" && <OrderConfirmed />}
                {transaction.status === "rejected" && <OrderRejected />}
            </div>
        </main>
    );
};

export default OrderStatus;