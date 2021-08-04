/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import ExcalidrawApp from "../src/excalidraw-app/index";

const ExampleApp = () => {
  const [data, setData] = useState({});
  const [excalidrawState, setExcalidrawState] = useState({});

  const handleExcalidrawStateData = (excalidrawStateData) => {
    console.error("Excalidraw State Data: ", excalidrawStateData);
    setExcalidrawState(excalidrawState);
  };

  useEffect(() => {
    const name = prompt("Enter name: ");
    setData({
      roomId: "Abcd",
      ExcalidrawEncryptionKey: "vnh23bg5bcftghv93745gt",
      userName: name,
      enableCustomProps: true,
    });
  }, []);

  return (
    <ExcalidrawApp
      data={data}
      handleExcalidrawStateData={handleExcalidrawStateData}
    />
  );
};

export default ExampleApp;
