import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-1 display-none lg: display-flex max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a href="https://github.com/TapX-BTC/soratap">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
            contribute to this site on&nbsp;
            <code className="font-mono font-bold">github</code>
          </p>
        </a>
        <div className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center lg:static lg:h-24 lg:w-auto lg:bg-none bg-black sm:bg-black">          <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://tapx.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site By{" "}
          <Image
            src="/tapxwhite.svg"
            alt="TapX Logo"
            width={100}
            height={24}
            priority
          />
        </a>

        </div>
      </div>
      <div className="relative -z-10 flex flex-col place-items-center before:z-[-10] before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:to-orange-500 after:blur-2xl after:content-[''] before:to-orange-700 before:opacity-10 after:from-sky-900 after:via-[#ffbb01] after:opacity-40 before:lg:h-[360px] ">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/sorafull.svg"
          alt="Sora Logo"
          width={180}
          height={37}
          priority
        />
        <p className="mt-6 text-lg text-center leading-8 text-gray-500">
          $SORA is a community driven Bitcoin token on the Bitcoin TAP Protocol.
        </p>
        <div className="mt-10 flex flex-col items-center text-center justify-center gap-y-6 sm:flex-row sm:justify-center sm:gap-x-6">
          <a
            href="https://www.tapx.app/tokens/%24sora"
            className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Explore $SORA on TapX
          </a>
          <a href="https://t.me/SORA_ON_TAP" className="text-sm font-semibold leading-6 text-white hover:text-orange-500">
            Join Telegram Community <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="mt-6 text-sm font-bold text-center leading-8 text-red-500">
          $SORA token page and balances on TapX are currently being fixed and will be updated shortly.
        </p>
        <div className="my-10 flex items-center justify-center gap-x-6">

          <a href="https://x.com/sora_btc?s=21&t=RHfes13PLRHYh7rIA3EtJg" className="rounded-md text-center p-2 hover:bg-gray-800">
            <Image
              className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/twitter.svg"
              alt="X Twitter Icon"
              width={24}
              height={24}
              priority
            />
            <p className="text-sm">eng</p>
          </a>
          <a href="https://x.com/sora_lfg?s=21&t=RHfes13PLRHYh7rIA3EtJg" className="rounded-md text-center p-2 hover:bg-gray-800">
            <Image
              className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/twitter.svg"
              alt="X Twitter Icon"
              width={24}
              height={24}
              priority
            />
            <p className="text-sm">cn</p>
          </a>
          <a href="https://t.me/SORA_ON_TAP" target="_blank" className=" text-center rounded-md p-2 hover:bg-gray-800">
            <Image
              className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/telegram.svg"
              alt="Telegram Icon"
              width={24}
              height={24}
              priority
            />
            <p className="text-sm">tg</p>

          </a>
        </div>


      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://trac.network"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Trac Network{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Decentralized metaprotocol tracking for Bitcoin Ordinals.
          </p>
        </a>

        <a
          href="https://trac.network/tap/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tap Protocol{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            OrdFi-enabling Protocol on Bitcoin. All the sercurity, none of the gatekeeping.
          </p>
        </a>

        <a
          href="https://tapx.app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            TapX{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore Tap tokens on TapX Explorer. Marketplace coming soon.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Telegram{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Get involved in the community by joining our Telegram.
          </p>
        </a>
      </div>
    </main>
  );
}
