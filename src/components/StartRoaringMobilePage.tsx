import Image from "next/image";
import Button from "@/components/Button";
import ClanLogo from "@/components/ClanLogo";
import Link from "next/link";

const StartRoaringPage = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden px-4 pt-16 pb-10  main-section">
      {/* Background Images */}
      <Image
        src="/Images/startRoaring/MobileAvtar1.png"
        alt="Avtar 2"
        width={400}
        height={400}
        objectFit="cover"
        className="absolute left-0 top-24 w-[400px] h-full z-0" // optional opacity
      />
      <Image
        src="/Images/startRoaring/Avtar3.png"
        alt="Avtar 3"
        width={300}
        height={300}
        objectFit="cover"
        className="absolute right-0 top-20 w-[300px] h-full  z-1" // optional opacity
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-32 h-dvh">
        {/* Center Card */}
        {/* <div className="drop-shadow-[10px_10px_5px_rgba(255,255,255,1)] flex items-center justify-center">
          <div
            className="px-10 py-8 rounded relative bg-gradient-to-br from-black via-black/80 to-transparent w-[328px] h-[380px] flex flex-col gap-6"
            style={{
              overflow: "hidden",
              clipPath:
                "polygon(2% 8%, 2% 85%, 10% 98%, 96% 98%, 98% 95%, 98% 18%, 90% 3%, 4% 3%, 2% 8%)",
            }}
          >
            <p className="text-center text-xl text-white">
              In the age of myth,
              <br />
              Warriors chose their clan.
            </p>
            <p className="text-center  text-sm leading-8 text-white">
              In the age of Twitter, they choose again,
              <br />
              <span>Post. Engage. Earn Roar Points.</span>
              <br />
              Only those who join the waitlist will get
              <br />
              early access to the battlegrounds.
              <br />
              Which clan will you fight for?
            </p>
          </div>
        </div> */}

        <h1 className="text-3xl text-center font-bold text-white leading-tight">
          Introducing
          <br />
          Roar Points
        </h1>

        <div className="flex flex-col items-center gap-6 w-full max-w-xs">
          <Image
            src="/Images/startRoaring/MobileCard.png"
            width={300}
            height={380}
            alt="mobilecard"
            className="w-full h-auto"
            priority
          />

          <Link href="/introducingClans" prefetch>
            <Button
              width={328}
              height={60}
              ButtonText="Get Started"
              className="font-semibold w-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartRoaringPage;
