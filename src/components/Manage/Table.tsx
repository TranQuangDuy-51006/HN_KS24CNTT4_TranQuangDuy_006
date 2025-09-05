import React from "react";

export default function Table() {
  return (
    <div className="bg-white mt-5 shadow-2xs rounded-2xl p-5">
      <h2 className="text-[25px] py-5">Danh sách hóa đơn</h2>
      <table className="w-[90%] table-auto border-collapse border border-gray-400 m-auto">
        <thead>
          <tr>
            <th className="border border-gray-300 py-3">Tên chủ hộ</th>
            <th className="border border-gray-300 py-3">Số tiền</th>
            <th className="border border-gray-300 py-3">Trạng thái</th>
            <th className="border border-gray-300 py-3">Hành động</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* <tr>
            <td className="border border-gray-300 py-3">ABC</td>
            <td className="border border-gray-300 py-3">700.000VND</td>
            <td className="border border-gray-300 py-3">Đã thanh toán</td>
            <td className="border border-gray-300 py-3">
              <button className="p-3 text-blue-500 border-2 rounded-2xl mr-2">
                Sửa
              </button>
              <button className="p-3 text-red-500 border-2 rounded-2xl">
                Xóa
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
