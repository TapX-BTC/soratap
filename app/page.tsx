import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          contribute to this site on&nbsp;
          <code className="font-mono font-bold">github</code>
        </p>
        <div className="z-1fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://tapx.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
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

      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-orange-300 after:via-orange-400 after:to-orange-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ffbb01] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/sorafull.svg"
          alt="Sora Logo"
          width={180}
          height={37}
          priority
        />
        <p className="mt-6 text-lg leading-8 text-gray-600">
          $SORA is a community driven Bitcoin token on the Bitcoin TAP Protocol.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:justify-center sm:gap-x-6">
          <a
            href="https://www.tapx.app/tokens/%24sora"
            className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Explore $SORA on TapX
          </a>
          <a href="https://t.me/SORA_ON_TAP" className="text-sm font-semibold leading-6 text-white">
            Join Telegaram Community <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">

          <a href="https://x.com/sora_btc?s=21&t=RHfes13PLRHYh7rIA3EtJg">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/twitter.svg"
              alt="X Twitter Icon"
              width={24}
              height={24}
              priority
            />
            <p className="text-sm">eng</p>
          </a>
          <a href="https://x.com/sora_lfg?s=21&t=RHfes13PLRHYh7rIA3EtJg">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/twitter.svg"
              alt="X Twitter Icon"
              width={24}
              height={24}
              priority
            />
            <p className="text-sm">cn</p>
          </a>
          <a href="https://t.me/SORA_ON_TAP">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/telegram.svg"
              alt="Telegram Icon"
              width={24}
              height={24}
              priority
            />
          </a>
        </div>


      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://trac.network"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
            Decentralized metaprotocol tracking for Bitcoin Ordinals..
          </p>
        </a>

        <a
          href="https://trac.network/tap/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
