import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import LegalPage from "@/pages/LegalPage";
import { LocalServicePage } from "@/pages/LocalServicePage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={() => <LegalPage type="privacy" />} />
      <Route path="/terms-and-conditions" component={() => <LegalPage type="terms" />} />
      <Route path="/cookie-policy" component={() => <LegalPage type="cookies" />} />
      <Route path="/refund-policy" component={() => <LegalPage type="refunds" />} />
      <Route path="/window-cleaning-blandford-forum" component={() => <LocalServicePage pageKey="window-cleaning-blandford-forum" />} />
      <Route path="/window-cleaning-wimborne" component={() => <LocalServicePage pageKey="window-cleaning-wimborne" />} />
      <Route path="/window-cleaning-spetisbury" component={() => <LocalServicePage pageKey="window-cleaning-spetisbury" />} />
      <Route path="/window-cleaning-charlton-marshall" component={() => <LocalServicePage pageKey="window-cleaning-charlton-marshall" />} />
      <Route path="/gutter-cleaning-blandford-forum" component={() => <LocalServicePage pageKey="gutter-cleaning-blandford-forum" />} />
      <Route path="/solar-panel-cleaning-dorset" component={() => <LocalServicePage pageKey="solar-panel-cleaning-dorset" />} />
      <Route path="/conservatory-cleaning-dorset" component={() => <LocalServicePage pageKey="conservatory-cleaning-dorset" />} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;