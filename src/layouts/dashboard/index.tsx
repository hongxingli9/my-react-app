import { NavVerticalLayout, useFilteredNavData, NavMobileLayout, NavHorizontalLayout } from "./nav";
import Header from "./header";
import Main from "./main";
import Logo from "@/components/Logo";
import { down, useMediaQuery } from "@/hooks";
import { useSettings } from "@/store/settingStore";
import { ThemeLayout } from "@/types/enum";

export default function DashboradLayout() {
  const isMobile = useMediaQuery(down("md"));
  return (
    <div className="w-full min-h-screen bg-background">
      {isMobile ? <MobileLayout /> : <PcLayout />}
    </div>
  );
}

function MobileLayout() {
  const navData = useFilteredNavData();
  return (
    <>
      <Header leftSlot={<NavMobileLayout data={navData} />} />
      <Main />
    </>
  );
}

function PcLayout() {
  const { themeLayout } = useSettings();
  if (themeLayout === ThemeLayout.Horizontal) return <PcHorizontalLayout />;
  return <PcVerticalLayout />;
}

function PcHorizontalLayout() {
  const navData = useFilteredNavData();
  return (
    <>
      <Header leftSlot={<Logo />} />
      <NavHorizontalLayout data={navData} />
      <Main />
    </>
  );
}

function PcVerticalLayout() {
  const settings = useSettings();
  const { themeLayout } = settings;
  const navData = useFilteredNavData();

  const mainPaddingLeft =
    themeLayout === ThemeLayout.Vertical
      ? "var(--layout-nav-width)"
      : "var(--layout-nav-width-mini)";
  return (
    <>
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
