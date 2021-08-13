// import "../styles/bootstrap-grid.min.css";
import "antd/dist/antd.css";
// import { MainLayout } from "../components/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // return (
  //   <MainLayout>
  //     <Component {...pageProps} />
  //   </MainLayout>
  // );
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
