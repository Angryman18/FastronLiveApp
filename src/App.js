import React from "react";
import { Route, Switch } from "react-router-dom";
import BacktoTop from "./Components/Content/Scroll/BacktoTop";
import ScrollToTop from "./Components/Content/Scroll/ScrollToTop";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const Header = React.lazy(() => import("./Components/Header/Header"));
const Hero = React.lazy(() => import("./Components/Content/Top/Hero"));
const Middle = React.lazy(() => import("./Components/Content/Middle/Middle"));
const Pricing = React.lazy(() =>
  import("./Components/Content/Pricing/PricingSection")
);
const Footer = React.lazy(() => import("./Components/Footer/Footer/Footer"));
const Complaint = React.lazy(() =>
  import("./Components/Content/Complaint/Complaint")
);
const Counter = React.lazy(() =>
  import("./Components/Content/Counter/Counter")
);
const PricingPage = React.lazy(() =>
  import("./Components/Content/Pricing/PricingPage")
);
const Findus = React.lazy(() => import("./Components/Content/Findus/Findus"));
const NotFound = React.lazy(() => import("./NotFound"));

function App() {
  return (
    <React.Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoadingSpinner />
        </div>
      }
    >
      <Header />
      <ScrollToTop />
      <BacktoTop />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Middle />
          <Counter />
          <Pricing />
          <Findus />
        </Route>
        <Route path="/complaint">
          <Complaint />
        </Route>
        <Route path="/pricing">
          <PricingPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </React.Suspense>
  );
}

export default App;
