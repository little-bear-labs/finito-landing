import {
  Card,
} from "@/components/ui/card";


export const HeroCardsAlternate = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-full h-[500px]">
      {/* Screenshot 1 */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <div className="h-40 w-full bg-primary flex items-center justify-center rounded-lg">
        TODO: Screenshot 1 HERE
      </div>
      </Card>

      {/* Screenshot 2 */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <div className="h-64 w-full bg-primary flex items-center justify-center rounded-lg">
            TODO: Screenshot 2 HERE
          </div>
      </Card>

      {/* Screenshot 3 */}
      <Card className="absolute top-[160px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <div className="h-[350px] w-full bg-primary flex items-center justify-center rounded-lg">
          TODO: Screenshot 3 HERE
        </div>
      </Card>

      {/* Screenshot 4 */}
      <Card className="absolute w-[350px] -right-[10px] bottom-4  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <div className="h-48 w-full bg-primary flex items-center justify-center rounded-lg">
        TODO: Screenshot 4 HERE
      </div>
      </Card>
    </div>
  );
};
