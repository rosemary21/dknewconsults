import React, { forwardRef } from "react";

const RootLayout = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={`${className} pt-8 relative`}>
      {children}
    </div>
  );
});

RootLayout.displayName = "RootLayout";

export default RootLayout;
