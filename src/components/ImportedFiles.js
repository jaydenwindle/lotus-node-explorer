import React, { useState, useEffect } from "react";

const ImportedFiles = ({ client }) => {
  const [files, setFiles] = useState([]);
  const [fileToImport, setFileToImport] = useState([]);
  useEffect(() => {
    const getImportedFiles = async () => {
      const files = await client.listImports();
      setFiles(files);
    };
    getImportedFiles();
  }, [fileToImport]);
  return (
    <div className="w-full rounded overflow-hidden shadow-md mb-4">
      <div className="px-6 py-4 w-full">
        <div className="font-bold text-xl mb-2">Imported Files</div>
        {files.length === 0 && "No imported files"}
        {files.length > 0 && (
          <table className="w-full table-fixed">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left border px-4 py-2">Key</th>
                <th className="text-left border px-4 py-2">Path</th>
                <th className="text-left border px-4 py-2">Size</th>
                <th className="text-left border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {files.map(file => (
                <tr>
                  <td className="text-gray-700 text-base border px-4 py-2 break-all">
                    {file.Key[Object.keys(file.Key)[0]]}
                  </td>
                  <td className="text-gray-700 text-base border px-4 py-2 break-all">
                    {file.FilePath}
                  </td>
                  <td className="text-gray-700 text-base border px-4 py-2 break-all">
                    {file.Size}
                  </td>
                  <td className="text-gray-700 text-base border px-4 py-2 break-all">
                    {file.Status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ImportedFiles;
