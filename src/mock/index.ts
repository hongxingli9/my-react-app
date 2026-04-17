import { setupWorker } from "msw/browser";
import { menuList } from "./handlers/menu";
import { signIn, userList } from "./handlers/user";

const handlers = [menuList, signIn, userList];
const worker = setupWorker(...handlers);

export { worker };
