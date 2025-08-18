import { useState } from "react";

export const useHighlightOnHover = () => {
  const [hover, setHover] = useState(false);

  const eventHandlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  const style = hover
    ? {
        transform: "scale(1.05)",
        transition: "all 0.3s",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      }
    : { transition: "all 0.3s", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" };

  return { eventHandlers, style };
};
