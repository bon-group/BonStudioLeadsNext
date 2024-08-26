"use client";

import { RefObject, useEffect } from "react";

function useResizeObserver(
  ref: RefObject<HTMLElement>,
  onSizeChange: () => void
) {
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      onSizeChange();
    });

    if (ref.current) {
      ro.observe(ref.current);
      return () => ro.disconnect();
    }
  }, [ref.current]);
}

export default useResizeObserver;