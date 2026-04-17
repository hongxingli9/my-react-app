import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";

function App({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Toaster />
      <div>{children}</div>
    </QueryClientProvider>
  );
}

export default App;
