import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Download = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Button = styled.button`
  border: solid green 2px;
  padding: 5px;
  background: #287f02;
  color: white;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
function InstallPWA() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }

  return (
    <Download>
      <Button onClick={onClick}>Install App</Button>
    </Download>
  );
}

export default InstallPWA;
