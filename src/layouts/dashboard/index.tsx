import { NavVerticalLayout, useFilteredNavData } from "./nav";
import Header from "./header";
import Main from "./main";

export default function DashboradLayout() {
  return <PcLayout />;
  // return (
  //   <div className="w-screen h-screen bg-background flex">
  //     <aside className="basis-(--layout-nav-width) shrink-0 grow-0">
  //       <div className="flex justify-center items-center h-(--layout-header-height)">
  //         <Logo />
  //         <span className="text-xl font-bold transition-all duration-300 ease-in-out">
  //           {GLOBAL_CONFIG.appName}
  //         </span>
  //       </div>
  //       <ScrollAreaSider />
  //     </aside>
  //     <main className="grow">
  //       <header>header</header>
  //       <div>
  //         <Suspense>
  //           <Outlet />
  //         </Suspense>
  //       </div>
  //     </main>
  //   </div>
  // );
}

function PcLayout() {
  return <PcVerticalLayout />;
}

function PcVerticalLayout() {
  const mainPaddingLeft = "var(--layout-nav-width)";
  const navData = useFilteredNavData();
  return (
    <>
      {/** TODO */}
      <NavVerticalLayout data={navData} />
      <div
        className="relative w-full min-h-screen flex flex-col transition-[padding] duration-300 easin-in-out"
        style={{ paddingLeft: mainPaddingLeft }}
      >
        <Header />
        <Main />
      </div>
    </>
  );
}
