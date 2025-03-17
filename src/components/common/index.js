import TopNavbar from "@/headers/topNavbar";

export default function CommonLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
    </>
  );
}
