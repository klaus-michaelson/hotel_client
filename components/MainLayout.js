export const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column " style={{ height: "100vh" }}>
      <div
        className="d-flex justify-content-center"
        style={{
          backgroundColor: "orange",
          color: "white",
        }}
      >
        This is from layout
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
