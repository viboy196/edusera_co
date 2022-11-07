import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

const navigationRoutes = ["home", "about", "pricing", "contact"];

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="nav_container">
      {navigationRoutes.map((singleRoute) => {
        return (
          <NavigationLink
            key={singleRoute}
            href={`/${singleRoute}`}
            text={singleRoute}
            router={router}
          />
        );
      })}
    </nav>
  );
}

type PropsNavigationLink = {
  href: string;
  text: string;
  router: NextRouter;
};
function NavigationLink({ href, text, router }: PropsNavigationLink) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link href={href === "/home" ? "/" : href} passHref legacyBehavior>
      <a
        href={href === "/home" ? "/" : href}
        className={`${isActive && "nav_item_active"} nav_item`}
      >
        <span>{text}</span>
      </a>
    </Link>
  );
}
