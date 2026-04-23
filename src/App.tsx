import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useMatches } from "react-router";
import { ThemeProvider } from "@/theme/theme-provider";

function App({ children }: { children: React.ReactNode }) {
  console.log(useMatches());
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <Toaster />
        <TooltipProvider>
          <div>{children}</div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
