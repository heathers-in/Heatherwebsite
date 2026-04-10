import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Outlet />
    </div>
  );
}
