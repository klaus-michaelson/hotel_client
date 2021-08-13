import Nav from "./Nav";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div
        style={{ height: "100vh", padding: 0, margin: 0 }}
        className={`d-flex`}
      >
        {children}
      </div>
    </>
  );
};
