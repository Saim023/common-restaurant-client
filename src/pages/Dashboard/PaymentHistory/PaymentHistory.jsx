import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="Payment History"
        subHeading="At a glance"
      ></SectionTitle>
      <div className="overflow-y-auto max-h-[500px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] font-[Cinzel-decorative] uppercase font-bold text-white sticky top-0 z-10">
              <th>#</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Total Price</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment.email}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.price}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
