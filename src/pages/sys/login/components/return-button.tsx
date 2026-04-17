import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import useLocale from "@/locales/use-locale";

interface ReturnButtonProps {
  onClick?: () => void;
}

function ReturnButton({ onClick }: ReturnButtonProps) {
  const { t } = useLocale();
  return (
    <Button
      variant="link"
      onClick={onClick}
      className="w-full cursor-pointer text-accent-foreground"
    >
      <Icon icon="solar:alt-arrow-left-linear" size={20} />
      <span className="text-sm">{t("sys.login.backSignIn")}</span>
    </Button>
  );
}

export default ReturnButton;
