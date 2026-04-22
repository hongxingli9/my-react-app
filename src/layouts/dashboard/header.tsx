import { Icon } from "@/components/icon";
import LocalePicker from "@/components/locale-picker";
import { useSettings } from "@/store/settingStore";
import { Button } from "@/components/ui/button";
import BreadCrumb from "../components/bread-crumb";
import AccountDropdown from "../components/account-dropdown";
import SearchBar from "../components/search-bar";
import NoticeButton from "../components/notice";
import SettingButton from "../components/setting-button";
import { cn } from "@/utils";
import type { ReactNode } from "react";

interface HeaderProps {
  leftSlot?: ReactNode;
}

export default function Header({ leftSlot }: HeaderProps) {
  const { breadCrumb } = useSettings();
  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-(--zIndex-appBar)",
        "flex items-center justify-between px-2 grow-0 shrink-0",
        "bg-background/60 backdrop-blur-xl",
        "h-(--layout-header-height)",
      )}
    >
      <div className="flex items-center">
        {leftSlot}
        <div className="hidden md:block ml-4">{breadCrumb && <BreadCrumb />}</div>
      </div>

      <div className="flex items-center gap-1">
        <SearchBar />
        <LocalePicker />
        <Button variant="ghost" size="icon" className="rounded-full">
          <Icon icon="mdi:github" size={24} />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Icon icon="carbon:logo-discord" size={24} />
        </Button>
        <NoticeButton />
        <SettingButton />
        <AccountDropdown />
      </div>
    </header>
  );
}
