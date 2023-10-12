import { Outlet } from "react-router-dom";

type AppProps = {
  children: JSX.Element | JSX.Element[];
};

export default function App({ children }: AppProps) {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
}
