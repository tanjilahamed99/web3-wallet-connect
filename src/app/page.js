"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ConnectButton } from "thirdweb/react";
import { clientV5 } from "@/client";

export default function Home() {
  return (
    <div>
      <ConnectWallet btnTitle="V4 Button" />
      <ConnectButton client={clientV5} />
    </div>
  );
}
