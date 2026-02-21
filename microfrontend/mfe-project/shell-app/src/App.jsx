import React, { Suspense } from "react";

const NavApp = React.lazy(() => import("nav_mfe/NavApp"));

export default function App() {
  return (
    <div>
      <h1>Shell Application</h1>

      <Suspense fallback={<div>Loading Nav...</div>}>
        <NavApp />
      </Suspense>
    </div>
  );
}