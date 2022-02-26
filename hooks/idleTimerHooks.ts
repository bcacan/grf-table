import { useCallback, useEffect } from "react";
import { debounce as debounceFn } from "throttle-debounce";

export function useOnIdle({
  debounce,
  events,
  onAction,
  onIdle,
  idleTimeout,
  stop,
}: any) {
  const actionCallBack = useCallback(debounceFn(debounce, true, onAction), []);
  const idleCallBack = useCallback(debounceFn(idleTimeout, false, onIdle), []);

  const removeListeners = useCallback(() => {
    events.forEach((event: any) => {
      document.removeEventListener(event, actionCallBack);
      document.removeEventListener(event, idleCallBack);
    });
  }, [events, actionCallBack, idleCallBack]);

  useEffect(() => {
    if (!stop) {
      events.forEach((event: any) => {
        document.addEventListener(event, actionCallBack);
        document.addEventListener(event, idleCallBack);
      });
    }
    return removeListeners;
  }, [stop, events, actionCallBack, idleCallBack, removeListeners]);

  return { removeListeners };
}
