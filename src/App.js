import React, {Suspense} from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./Home/Home"));
const HowItWorks = React.lazy(() => import("./HowItWorks/HowItWorks"));
const Pricing = React.lazy(() => import("./Pricing/Pricing"));
const Contact = React.lazy(() => import("./Contact/Contact"));
const WhatIsHolaBusiness = React.lazy(() => import("./WhatIsHolaBusiness/WhatIsHolaBusiness"));

function App() {
  return (
    <>
    <Suspense fallback={<p className="loading">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="what-is-hola-business" element={<WhatIsHolaBusiness />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
