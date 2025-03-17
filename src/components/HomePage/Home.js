"use clinet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import {
  ArrowDown,
  ArrowRight,
  CalendarArrowDown,
  MapPinCheck,
  Users,
} from "lucide-react";
export default function HomePage() {
  return (
    <>
      <div className="flex flex-col w-full item-center justify-evenly">
        <div className="block lg:flex w-full justify-evenly px-10 border-b ">
          <div className="flex flex-col  py-10 lg:py-20" id="content">
            <h1 className="text-4xl font-bold ">
              Explore, Discover, Celebrate—With the Right Vendors !
            </h1>
            <p className="text-lg lg:w-[450px] py-2">
              Browse our platform and discover vendors who fit your unique event
              style and vision.
            </p>

            <div className="block lg:flex py-5 gap-5">
              <Select>
                <SelectTrigger className="w-full lg:w-[250px] p-6 border-left lg:shadow-lg">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full lg:w-[250px] p-6  lg:shadow-lg ">
                  <SelectValue placeholder="Select a Event Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="mt-4 lg:mt-0 p-6 ml-2 bg-cyan-300 text-lg hover:bg-cyan-500">
                Search
              </Button>
            </div>
          </div>

          <div class="w-full lg:w-[600px] h-[400px]  overflow-hidden">
            <img
              src="/banner1.png"
              alt="Cropped Image"
              class="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Section2  */}
        <div className="flex flex-col  justify-between p-5 ">
          <h1 className="text-2xl font-bold">How It Works</h1>
          <p className="text-lg">
            Planning your perfect event is easier than ever with our simple,
            step-by-step process.
          </p>

          <div className="step block lg:flex w-full py-10  lg:gap-0">
            <div
              id="step1"
              className="flex flex-col lg:w-[300px] p-5 border shadow-md rounded-lg"
            >
              <div className="mx-auto">
                <MapPinCheck size={40} color="#A5F3FC" />
              </div>
              <h1 className="text-2xl font-bold  text-cyan-300 text-center">
                Select Location
              </h1>
              <p className="text-md font-normal">
                Simply select Location of Event so Our platform show all best
                vendors in that location.
              </p>
            </div>
            <div className="hidden lg:flex mt-20 mx-10">
              <ArrowRight size={40} />
            </div>

            <div
              id="step2"
              className="flex flex-col lg:w-[300px] mt-10 lg:mt-0 p-5 border shadow-md rounded-lg"
            >
              <div className="mx-auto">
                <Users size={40} color="#A5F3FC" />
              </div>

              <h1 className="text-2xl font-bold  text-cyan-300 text-center">
                See Best Vendors
              </h1>
              <p className="text-md font-normal">
                Compare vendor profiles, reviews, and prices to find the perfect
                match.
              </p>
            </div>
            <div className="hidden lg:flex mt-20 mx-10">
              <ArrowRight size={40} />
            </div>

            <div
              id="step3"
              className="flex flex-col lg:w-[300px]  mt-10 lg:mt-0 p-5 border shadow-md rounded-lg"
            >
              <div className="mx-auto">
                <CalendarArrowDown size={40} color="#A5F3FC" />
              </div>

              <h1 className="text-2xl font-bold  text-cyan-300 text-center">
                Book An Event
              </h1>
              <p className="text-md font-normal">
                Contact and book your vendors directly for seamless event
                planning.
              </p>
            </div>
          </div>
        </div>

        {/* Section3 */}
        <div className="flex flex-col w-full justify-between p-5">
          <h1 className="text-2xl font-bold ">Vendors for Every Event</h1>
          <p className="text-lg ">
            From weddings to corporate events, find top-rated vendors for every
            occasion.
          </p>
          <div className="w-full justify-between block lg:flex flex-wrap gap-5 py-10">
            <div className="w-[370px] p-4 border shadow-md">
              <div className="flex">
                <h1 className="text-xl font-bold">Wedding planners</h1>
                <div className="ml-auto">
                  <img
                    className="rounded-lg"
                    src="/wedding-planner.png"
                    alt="wedding-planner"
                    width={60}
                    height={50}
                  />
                </div>
              </div>
              <p className="text-md mt-2">
                They take care of all the details, freeing up your time to focus
                on what matters most.
              </p>

              <a href="/planner" className=" text-cyan-500">
                Explore Wedding planners
              </a>
            </div>
            <div className="w-[370px] p-4 border shadow-md">
              <div className="flex">
                <h1 className="text-xl font-bold">Vendors</h1>
                <div className="ml-auto">
                  <img
                    className="rounded-lg"
                    src="/wedding-planner.png"
                    alt="wedding-planner"
                    width={60}
                    height={50}
                  />
                </div>
              </div>
              <p className="text-md mt-2">
                From photographers to caterers, find top-rated vendors who can
                help make your event unforgettable.
              </p>

              <a href="/planner" className=" text-cyan-500">
                Explore Best Vendors
              </a>
            </div>
            <div className="w-[370px] p-4 border shadow-md">
              <div className="flex">
                <h1 className="text-xl font-bold">Your free wedding website</h1>
                <div className="ml-auto">
                  <img
                    className="rounded-lg"
                    src="/wedding-planner.png"
                    alt="wedding-planner"
                    width={60}
                    height={50}
                  />
                </div>
              </div>
              <p className="text-md mt-2">
                Create a personalized wedding website to share your love story,
                manage RSVPs, and keep guests updated with all the event details
              </p>

              <a href="/planner" className=" text-cyan-500">
                Explore website templates
              </a>
            </div>
            <div className="w-[370px] p-4 border shadow-md">
              <div className="flex">
                <h1 className="text-xl font-bold">Wedding planners</h1>
                <div className="ml-auto">
                  <img
                    className="rounded-lg"
                    src="/wedding-planner.png"
                    alt="wedding-planner"
                    width={60}
                    height={50}
                  />
                </div>
              </div>
              <p className="text-md mt-2">
                They take care of all the details, freeing up your time to focus
                on what matters most.
              </p>

              <a href="/planner" className=" text-cyan-500">
                Explore Wedding planners
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
