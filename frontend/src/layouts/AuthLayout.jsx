import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto mt-5 flex justify-center">
        <div className="w-1/3">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
