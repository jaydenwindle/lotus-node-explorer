import React, { useState, useEffect } from "react";

const Version = ({ client }) => {
  const [version, setVersion] = useState(null);
  useEffect(() => {
    const getVersionInfo = async () => {
      const version = await client.version();
      setVersion(version);
    };
    getVersionInfo();
  }, []);
  return (
    <div className="w-full rounded overflow-hidden shadow-md mb-4">
      <div className="px-6 py-4 w-full">
        <div className="font-bold text-xl mb-2">Version Info</div>
        <table className="w-full table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left border px-4 py-2">Version Number</th>
              <th className="text-left border px-4 py-2">API Version</th>
              <th className="text-left border px-4 py-2">Block Delay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-gray-700 text-base border px-4 py-2">
                {version ? version.Version : "..."}
              </td>
              <td className="text-gray-700 text-base border px-4 py-2">
                {version ? version.APIVersion : "..."}
              </td>
              <td className="text-gray-700 text-base border px-4 py-2">
                {version ? version.BlockDelay : "..."}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Version;
