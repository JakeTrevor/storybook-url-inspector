import { DecoratorFunction, useChannel } from "@storybook/addons";
import { useEffect } from "@storybook/addons";

export const URLObserver: DecoratorFunction = (storyFn, context) => {
  let emit = useChannel({});

  let updateURL = () => {
    emit("urlUpdate", { newUrl: window.location.toString() });
    setTimeout(updateURL, 50);
  };

  useEffect(() => {
    updateURL();
  }, []);

  return storyFn(context);
};
