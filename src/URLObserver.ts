import { makeDecorator, StoryWrapper, useChannel } from "@storybook/addons";
import { useEffect } from "@storybook/addons";
import { CHANNEL_ID, PARAM_ID } from "./constants";

let URLObserver: StoryWrapper = (storyFn, context, { parameters }) => {
  let emit = useChannel({});

  let enabled = parameters.enabled || false;
  let timeout = parameters.timeout || 50;

  let updateURL = () => {
    emit(CHANNEL_ID, { newUrl: window.location.toString() });
  };

  useEffect(() => {
    if (!enabled) return;
    updateURL();
    let interval = setInterval(updateURL, timeout);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return storyFn(context);
};

export default makeDecorator({
  name: "URLObserver",
  parameterName: PARAM_ID,
  wrapper: URLObserver,
  skipIfNoParametersOrOptions: true,
});
