import { Outlet } from "react-router";
import { Fragment, Suspense } from "react";
import Logo from "@/components/Logo";
import { GLOBAL_CONFIG } from "@/global-config";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function DashboradLayout() {
  return (
    <div className="w-screen h-screen bg-background flex">
      <aside className="basis-(--layout-nav-width) shrink-0 grow-0">
        <div className="flex justify-center items-center h-(--layout-header-height)">
          <Logo />
          <span className="text-xl font-bold transition-all duration-300 ease-in-out">
            {GLOBAL_CONFIG.appName}
          </span>
        </div>
        <ScrollAreaSider />
      </aside>
      <main className="grow">
        <header>header</header>
        <div>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

function ScrollAreaSider() {
  return (
    <ScrollArea className="h-[calc(100%-var(--layout-header-height))] w-full border border-r border-dotted ">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <br className="my-2" />
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

// function PcLayout() {

// }
