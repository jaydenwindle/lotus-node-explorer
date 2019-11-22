import React, { useState, useEffect } from "react";

const Wallets = ({ client }) => {
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    const getWallets = async () => {
      const wallets = await client.walletList();
      const walletsWithBalances = await Promise.all(
        wallets.map(async wallet => {
          const balance = await client.walletBalance(wallet);
          return {
            address: wallet,
            balance
          };
        })
      );

      setWallets(walletsWithBalances);
    };
    getWallets();
  }, []);
  return (
    <div className="rounded shadow-md mb-4">
      <div className="max-w-full px-6 py-4">
        <div className="font-bold text-xl mb-2">Wallets</div>
        <table className="table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left border px-4 py-2">Address</th>
              <th className="text-left border px-4 py-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map(wallet => (
              <tr>
                <td className="text-gray-700 text-base border px-4 py-2 break-all">
                  {wallet.address}
                </td>
                <td className="text-gray-700 text-base border px-4 py-2 break-all">
                  {wallet.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallets;
