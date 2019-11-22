import React, { useState, useEffect } from "react";
import * as queryString from "query-string";
import LotusClient from "lotus-js";

import lotusLogo from "../lotus-logo.png";
import Version from "./Version";
import Wallets from "./Wallets";
import ImportedFiles from "./ImportedFiles";
import ChainHead from "./ChainHead";

const Explorer = props => {
  const queryParams = queryString.parse(props.location.search);
  const [client, setClient] = useState(null);
  const [connecting, setConnecting] = useState(null);
  const [connectionError, setConnectionError] = useState(null);
  useEffect(() => {
    const setupConnection = async () => {
      setConnecting(true);
      try {
        const client = await LotusClient.init({
          host: queryParams.host,
          token: queryParams.token
        });
        setConnecting(false);
        setClient(client);
      } catch (err) {
        setConnectionError(err);
        setConnecting(false);
      }
    };
    setupConnection();
  });

  return (
    <div className="container mx-auto">
      <div className="w-full items-center my-4">
        <img src={lotusLogo} className="mb-4 w-40 mx-auto" />
        <h1 className="font-bold text-3xl text-center">Node Explorer</h1>
      </div>
      <div className="w-full items-center text-center my-4">
        {connecting && !connectionError && !client && (
          <p>Connecting to {queryParams.host}...</p>
        )}
        {connectionError && <p>Error connecting to {queryParams.host}</p>}
        {client && <p>Connected to {queryParams.host}</p>}
      </div>
      {client && (
        <div className="w-full md:w-1/2 my-4 mx-auto">
          <Version client={client} />
          <ChainHead client={client} />
          <Wallets client={client} />
          <ImportedFiles client={client} />
        </div>
      )}
    </div>
  );
};

export default Explorer;
