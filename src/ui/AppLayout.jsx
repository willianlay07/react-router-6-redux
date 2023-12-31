import { Outlet, useNavigation } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Loading from "./Loading";

const AppLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading />;

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
