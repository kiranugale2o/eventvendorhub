import { menu } from "@/utils";
import Logo from "../../images/logo.png";
import {
  AlignLeft,
  BriefcaseBusiness,
  CircleUserRound,
  UserRound,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function TopNavbar() {
  return (
    <>
      <div className="flex flex-col w-full border-b justify-between ">
        <div className="hidden lg:flex  text-end ml-auto mr-5 gap-1 py-1">
          <BriefcaseBusiness />
          Are you vendor
        </div>
        <div className="flex py-4 w-full justify-between">
          <div className="logo flex  mt-[-10px] px-0 w-full justify-between lg:w-[450px]">
            <Sheet>
              <SheetTrigger>
                <div className="flex lg:hidden px-1 py-2 ">
                  <AlignLeft size={40} />
                </div>
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <div className="border-b p-5"></div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex  flex-col w-full ">
                  <ul className="flex flex-col p-3 gap-10">
                    {menu &&
                      menu.map((d, i) => {
                        return (
                          <a
                            className="uppercase sm:text-lg md:text-lg  font-semibold hover:text-cyan-200 hover:border-b border-cyan-200"
                            key={i}
                            href={d.path}
                          >
                            {d?.name}
                          </a>
                        );
                      })}
                  </ul>
                </div>
                <SheetFooter>
                  <div className="flex text-end ml-auto flex gap-2 py-1">
                    <BriefcaseBusiness />
                    Are you vendor
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Image
              className="dark:invert w-[300px] lg:w-[400px] h-[58px]"
              src={Logo}
              alt="Next.js logo"
              priority
            />
            <div className="flex lg:hidden py-2 mr-3 ">
              <UserRound size={40} />
            </div>
          </div>
          <div className="hidden lg:flex w-full ">
            <ul className="flex gap-4">
              {menu &&
                menu.map((d, i) => {
                  return (
                    <a
                      className="uppercase font-semibold hover:text-cyan-200 hover:border-b border-cyan-200"
                      key={i}
                      href={d.path}
                    >
                      {d?.name}
                    </a>
                  );
                })}

              <div className="flex ml-auto gap-5 px-5 " id="login-buttons">
                <a className="uppercase" href="login">
                  login
                </a>
                <a className="uppercase" href="signup">
                  Join us
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
