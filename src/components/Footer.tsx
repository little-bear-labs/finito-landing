import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

import { LogoIcon, RedditIcon } from './Icons'

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-[calc(100%-48px)] lg:w-11/12 mx-auto" />

      <section className="container py-6 w-full container flex items-center justify-between">
        <a
          rel="noreferrer noopener"
          href="/"
          className="font-bold flex items-center text-xl flex gap-2"
        >
          <LogoIcon />
          Finito
        </a>
        <div className="flex items-center gap-4">
          <a
            rel="noreferrer noopener"
            href="https://reddit.com/r/finitoapp"
            target="_blank"
            className="hover:text-primary"
          >
            <RedditIcon
              className="fill-current hover:fill-primary"
              height={24}
              width={24}
            />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://discord.gg/etGQgdYB"
            target="_blank"
            className="hover:text-primary"
          >
            <DiscordLogoIcon className="size-6" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://x.com/finitodev"
            target="_blank"
            className="hover:text-primary"
          >
            <TwitterLogoIcon className="size-6" />
          </a>
        </div>
      </section>

      {/* <section className="container py-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold flex items-center text-xl flex gap-2"
          >
            <LogoIcon />
            Finito
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Dribbble
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitch
            </a>
          </div>
        </div>
      </section> */}

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 Powered by{' '}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.littlebearlabs.io/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Little Bear Labs
          </a>
        </h3>
      </section>
    </footer>
  )
}
