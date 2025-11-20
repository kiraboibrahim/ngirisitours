import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faCalendarAlt,
    faUser,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import { Package } from "@/models/Package"; // import your model

const packages: Package[] = [
    {
        id: 1,
        title: "Safari Adventure in Queen Elizabeth National Park",
        location: "Queen Elizabeth",
        duration: "3 days",
        people: "2 Persons",
        price: 450,
        rating: 4.8,
        ratingCount: 120,
        image: "/img/package-1.jpg",
    },
    {
        id: 2,
        title: "Gorilla Trekking Experience in Bwindi Impenetrable Forest",
        location: "Bwindi",
        duration: "4 days",
        people: "2 Persons",
        price: 900,
        rating: 5.0,
        ratingCount: 85,
        image: "/img/package-2.jpg",
    },
    {
        id: 3,
        title: "Chimpanzee Tracking in Kibale Forest",
        location: "Kibale",
        duration: "3 days",
        people: "2 Persons",
        price: 600,
        rating: 4.7,
        ratingCount: 60,
        image: "/img/package-4.jpg",
    },
    /**{
        id: 4,
        title: "Relaxing Getaway at Ssese Islands",
        location: "Ssese Islands",
        duration: "2 days",
        people: "2 Persons",
        price: 350,
        rating: 4.6,
        ratingCount: 45,
        image: "/img/package-4.jpg",
    }**/
    {
        id: 5,
        title: "Mountains & Waterfalls Hike in Rwenzori Mountains",
        location: "Rwenzori",
        duration: "5 days",
        people: "2 Persons",
        price: 750,
        rating: 4.9,
        ratingCount: 70,
        image: "/img/package-5.jpg",
    },
    {
        id: 6,
        title: "Cultural Tour of Kampala and Surroundings",
        location: "Kampala",
        duration: "1 day",
        people: "2 Persons",
        price: 150,
        rating: 4.5,
        ratingCount: 100,
        image: "/img/package-6.jpg",
    },
];

const PackagesSection = () => {
    return (
        <div className="w-full py-5" id="packages">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6
                    className="text-[#7AB730] uppercase mb-2 text-base font-medium leading-[1.2]"
                    style={{ letterSpacing: 5 }}
                >
                    Packages
                </h6>
                <h1 className="mb-2 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-medium leading-[1.2] text-[#212121]">
                    Perfect Tour Packages
                </h1>
                <div className="flex flex-wrap -mx-[15px]">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-4">
                            <div className="bg-white mb-2 transition-[box-shadow_0.5s] shadow-[0_0_30px_#CCCCCC]">
                                <img
                                    className="max-w-full h-auto"
                                    src={pkg.image}
                                    alt={pkg.title}
                                />
                                <div className="p-4">
                                    <div className="flex justify-between mb-3">
                                        <small className="text-[80%] font-normal">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#7AB730] mr-2" />
                                            {pkg.location}
                                        </small>
                                        <small className="text-[80%] font-normal">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-[#7AB730] mr-2" />
                                            {pkg.duration}
                                        </small>
                                        <small className="text-[80%] font-normal">
                                            <FontAwesomeIcon icon={faUser} className="text-[#7AB730] mr-2" />
                                            {pkg.people}
                                        </small>
                                    </div>
                                    <a className="text-[1.25rem] font-medium leading-[1.2] text-[#212121] no-underline hover:text-[#7AB730]" href="#">
                                        {pkg.title}
                                    </a>
                                    <div className="border-t border-[rgba(0,0,0,0.1)] mt-4 pt-4 flex justify-between">
                                        <h6 className="m-0 text-base font-medium leading-[1.2] text-[#212121]">
                                            <FontAwesomeIcon icon={faStar} className="text-[#7AB730] mr-2" />
                                            {pkg.rating} <small className="text-[80%] font-normal">({pkg.ratingCount})</small>
                                        </h6>
                                        <h5 className="m-0 text-[1.25rem] font-medium leading-[1.2] text-[#212121]">
                                            ${pkg.price}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackagesSection;