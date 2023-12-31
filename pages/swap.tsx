// `app/page.tsx` is the UI for the `/` URL
import SwapContainer from "../containers/swapConatiner";
import Navbar from "@/components/nav/navbar";
import { useSelector } from "react-redux";

export default function Swap() {
  return (
    <div className={`container mx-auto`}>
      <Navbar />
      <SwapContainer />
    </div>
  );
}
