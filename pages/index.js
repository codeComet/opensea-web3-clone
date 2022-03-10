import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import { useWeb3 } from "@3rdweb/hooks";
import { useEffect } from "react";
import { client } from "../lib/sanityClient";
import toast, { Toaster } from "react-hot-toast";

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

export default function Home() {
  const { address, connectWallet } = useWeb3();

  const welcomeToast = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back ${userName != "Unknown" ? userName : "Human"}!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unknown",
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);
      welcomeToast(result.userName);
    })(); //IIFE
  }, [address]);

  return (
    <div className={styles.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <div
            className={style.button}
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </div>
          <div className={style.details}>
            To view the OpenSea marketplace, you need to connect your wallet.
          </div>
        </div>
      )}
    </div>
  );
}
