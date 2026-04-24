import { GLOBAL_CONFIG } from "@/global-config";
// import Logo from "@/assets/icons/ic-logo-badge.svg";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useMatches } from "react-router";
import { ThemeProvider } from "@/theme/theme-provider";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App({ children }: { children: React.ReactNode }) {
  console.log(useMatches());
  return (
    <HelmetProvider>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider>
          <Helmet>
            <title>{GLOBAL_CONFIG.appName}</title>
            {/* <link rel="icon" href={Logo} /> */}
          </Helmet>
          <Toaster />
          <TooltipProvider>
            <div>{children}</div>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
