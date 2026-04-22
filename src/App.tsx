import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useMatches } from "react-router";

function App({ children }: { children: React.ReactNode }) {
  console.log(useMatches());
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Toaster />
      <TooltipProvider>
        <div>{children}</div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
