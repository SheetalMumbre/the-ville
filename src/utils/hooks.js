import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const useMount = action => {
  const firstRun = useRef(true);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!firstRun.current) {
      return;
    }

    firstRun.current = false;
    setMount(true);

    if (action) {
      return action();
    }
  }, []);

  return mount;
};

export const useUpdateEffect = (effect, dependencies = []) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
};

export const useFormSelector = (selector) => {
  const data = useSelector(selector);
  const [result, setResult] = useState(data);
  const [staleData, setStaleData] = useState(null);
  const mount = useMount();

  useEffect(() => {
    if (!mount && data) {
      setStaleData(data);
    } else if (staleData && staleData !== data) {
      setStaleData(null);
    } else {
      setResult(data);
    }
  }, [data, mount, staleData]);

  return staleData ? null : result;
}

export const useIntervalWhenFocus = (callback, delay) => {
  const hasFocus = useSelector(state => state.application.hasFocus)
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = () => {
      if (hasFocus) {
        callback();
      }
    }
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const useAsyncEffect = (action, deps) => {
  return useEffect(() => {
    (async () => {
      await action();
    })();
  }, deps)
}

export const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

export const useCountdownTimer = (timeoutInSeconds) => {
  const [counter, setCounter] = useState(timeoutInSeconds);
  const updateCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(timeoutInSeconds);
  }

  useInterval(updateCounter, 1000);

  return { ready: counter == 0, reset: handleReset, timeLeft: counter };
}

export const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      const eventListener = event => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);

      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element]
  );
};

export const useTitle = title => {
  const [pageTitle, setPageTitle] = useState(title);
  useEffect(() => {
    if (pageTitle) {
      document.title = "MyBGL - " + pageTitle;
    }
  }, [pageTitle]);
  return [pageTitle, setPageTitle]
}
