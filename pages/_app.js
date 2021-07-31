import "../styles/globals.css";
import "../styles/bootstrap-grid.min.css";
import "antd/dist/antd.css";
import MainLayout from "../components/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
