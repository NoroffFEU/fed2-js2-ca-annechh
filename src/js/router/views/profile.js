import { buildNavBar } from "../../ui/dom/nav";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";


buildNavBar();
setLogoutListener();
authGuard();
