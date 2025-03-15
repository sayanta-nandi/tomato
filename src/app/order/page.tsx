const OrderPage = () => {
  return (
    <div className="min-h-[calc(100vh-320px)] sm:min-h-[calc(100vh-256px)] md:min-h-[calc(100vh-224px)] w-full p-4 md:px-10 lg:px-20">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-lg">
            <td className="hidden md:block">OrderID</td>
            <td>Date</td>
            <td>Price</td>
            <td className="hidden md:block">Products</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-red-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrive at 3:00pm, Today</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrived</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrived</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrived</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrived</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrived</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrived</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrived</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="hidden md:block py-4 px-1">215616</td>
            <td className="py-4 px-1">12/05/2025</td>
            <td className="py-4 px-1">$51</td>
            <td className="hidden md:block py-4 px-1">Pizza(2), Burger(2)</td>
            <td className="py-4 px-1">Arrived</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OrderPage;
