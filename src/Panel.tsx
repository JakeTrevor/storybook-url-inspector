import React, { useState } from "react";
import { useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  let [url, setUrl] = useState("");

  let emit = useChannel({
    urlUpdate: ({ newUrl }) => setUrl(newUrl),
  });

  return (
    <AddonPanel {...props}>
      <h3>Url is currently</h3>
      <p>{url}</p>
    </AddonPanel>
  );
};
