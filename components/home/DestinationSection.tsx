import Image from "next/image";
import { Destination } from "@/models/Destination";

const destinations: Destination[] = [
    {
        id: 1,
        name: "Murchison Falls National Park",
        location: "Northern Uganda",
        attractionsCount: 50,
        image: "/img/waterfall.jpeg",
    },
    {
        id: 2,
        name: "Bwindi Impenetrable Forest",
        location: "Southwestern Uganda",
        attractionsCount: 30,
        image: "/img/tourist-with-gorilla.jpeg",
    },
    {
        id: 3,
        name: "Kidepo Valley National Park",
        location: "Northeastern Uganda",
        attractionsCount: 25,
        image: "/img/elephant-crowd.jpeg",
    },
    {
        id: 4,
        name: "Ssese Islands",
        location: "Lake Victoria",
        attractionsCount: 15,
        image: "/img/tourist-swimming.jpeg",
    },
    {
        id: 5,
        name: "Rwenzori Mountains",
        location: "Western Uganda",
        attractionsCount: 20,
        image: "/img/tourist-trek.jpeg",
    },
    {
        id: 6,
        name: "Jinja – Source of the Nile",
        location: "Eastern Uganda",
        attractionsCount: 10,
        image: "/img/tourists-under-waterfall.jpeg",
    },
];

const DestinationSection = () => (
    <div className="w-full py-5" id="destinations">
        <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
            <h6
                className="text-[#7AB730] uppercase mb-2 text-base font-medium leading-[1.2]"
                style={{ letterSpacing: 5 }}
            >
                Destination
            </h6>
            <h1 className="mb-2 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-medium leading-[1.2] text-[#212121]">
                Explore Top Destinations in Uganda
            </h1>
            <div className="flex flex-wrap -mx-[15px]">
                {destinations.map((dest) => (
                    <div key={dest.id} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-4">
                        <div className="group relative overflow-hidden mb-2">
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                width={500}
                                height={350}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.3]"
                            />
                            <a
                                className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px] flex flex-col items-center justify-center bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.5)] transition-all duration-500 z-[1] text-white no-underline group-hover:top-0 group-hover:right-0 group-hover:bottom-0 group-hover:left-0 group-hover:border-[30px]"
                                href="#"
                            >
                                <h5 className="text-white mb-2 text-[1.25rem] font-medium leading-[1.2]">
                                    {dest.name}
                                </h5>
                                <span>{dest.attractionsCount} Attractions</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default DestinationSection;