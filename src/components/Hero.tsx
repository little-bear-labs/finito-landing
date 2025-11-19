import { Button } from "./ui/button";
import { HeroCardsAlternate } from "./HeroCardsAlternate";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCardsAlternate />
      </div>

      <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-end space-y-6 lg:ml-20">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Your entire {' '}
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              workflow
            </span>{" "}
          </h1><br />
          <h2 className="inline">
          in{' '}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            one
            </span>{" "}
            place
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full lg:w-auto">Get Started</Button>

          {/* <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
