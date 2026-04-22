// import CyanBlur from "@/assets/images/background/cyan-blur.png";
// import RedBlur from "@/assets/images/background/red-blur.png";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";

/** TODO */
function NoticeButton() {
  return (
    <>
      <div className="relative">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Icon icon="solar:bell-bing-bold-duotone" size={24} />
        </Button>
        <Badge variant="destructive" className="absolute -top-2 -right-2">
          4
        </Badge>
      </div>
    </>
  );
}

export default NoticeButton;
