import React, { useState, useEffect } from "react";

const ChainHead = ({ client }) => {
  const [chainHead, setChainHead] = useState(null);
  useEffect(() => {
    const getChainHead = async () => {
      const chainHead = await client.chainHead();
      setChainHead(chainHead);
    };
    getChainHead();
  }, []);
  return (
    <div className="w-full rounded overflow-hidden shadow-md mb-4">
      <div className="px-6 py-4 w-full">
        <h3 className="font-bold text-xl mb-2">Chain Head</h3>
        {chainHead && (
          <div>
            <h4 className="font-bold text-md mb-4">
              Height: {chainHead.Height}
            </h4>
            <h4 className="font-bold text-md mb-2">CIDs</h4>
            <table className="w-full table-auto mb-4">
              <tbody>
                {chainHead.Cids.map(cid => (
                  <tr>
                    <td className="text-gray-700 text-base border px-4 py-2 break-all">
                      {Object.keys(cid)[0]}
                    </td>
                    <td className="text-gray-700 text-base border px-4 py-2 break-all">
                      {cid[Object.keys(cid)[0]]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4 className="font-bold text-md mb-2">Blocks</h4>
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left border px-4 py-2">Miner</th>
                  <th className="text-left border px-4 py-2">Election Proof</th>
                  <th className="text-left border px-4 py-2">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {chainHead.Blocks.map(block => (
                  <tr>
                    <td className="text-gray-700 text-base border px-4 py-2 break-all">
                      {block.Miner}
                    </td>
                    <td className="text-gray-700 text-base border px-4 py-2 break-all">
                      {block.ElectionProof}
                    </td>
                    <td className="text-gray-700 text-base border px-4 py-2 break-all">
                      {block.Timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChainHead;
