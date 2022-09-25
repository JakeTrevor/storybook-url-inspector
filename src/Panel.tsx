import React, { useState } from "react";
import { useChannel, useParameter } from "@storybook/api";
import { AddonPanel, H2, Div, Code } from "@storybook/components";
import { CHANNEL_ID, PARAM_ID } from "./constants";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  let [url, setUrl] = useState("");

  let { enabled } = useParameter(PARAM_ID, { enabled: false });

  useChannel({
    [CHANNEL_ID]: ({ newUrl }) => setUrl(newUrl),
  });

  return (
    <AddonPanel {...props}>
      {enabled ? (
        <Div style={{ padding: "10px 20px" }}>
          <H2>Current URL:</H2>
          <Code>{url}</Code>
        </Div>
      ) : (
        <Div style={{ padding: "10px 20px" }}>
          <H2>URL Inspector not enabled for this story</H2>
        </Div>
      )}
    </AddonPanel>
  );
};
