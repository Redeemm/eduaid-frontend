import Multiple from "@/pages/multiple.js";
import Single from "@/pages/single.js";
import Sponsor from "@/pages/sponsor.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />}>
        <Route index element={<LoginPage />} />
      </Route>

      {/* Private routes */}
      <Route path="/home" element={<HomePage />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/single" element={<Single />}>
        <Route index element={<Single />} />
      </Route>
      <Route path="/multiple" element={<Multiple />}>
        <Route index element={<Multiple />} />
      </Route>
      <Route path="/sponsor" element={<Sponsor />}>
        <Route index element={<Sponsor />} />
      </Route>

      {/* Legal pages */}
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-use" element={<TermsOfUsePage />} />

      {/* Redirects */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
);

export default AppRoutes;
