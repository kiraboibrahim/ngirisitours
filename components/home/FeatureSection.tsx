import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyCheckAlt,
    faAward,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

const FeatureSection = () => {
    const features = [
        {
            icon: faMoneyCheckAlt,
            title: "Competitive Pricing",
            description: "Affordable safari packages designed to offer great value without compromising on comfort or experience."
        },
        {
            icon: faAward,
            title: "Best Services",
            description: "Professional guides, top-notch accommodations, and personalized itineraries for every traveler."
        },
        {
            icon: faGlobe,
            title: "Worldwide Coverage",
            description: "We offer safari experiences in Uganda and connections to select destinations across Africa."
        },
    ];

    return (
        <div className="w-full pb-5" id="features">
            <div className="max-w-[1140px] mx-auto px-[15px] pb-5">
                <div className="flex flex-wrap -mx-[15px]">
                    {features.map((f, idx) => (
                        <div key={idx} className="md:w-1/3 w-full px-[15px]">
                            <div className="flex mb-4">
                                <div
                                    className="flex flex-shrink-0 items-center justify-center bg-[#7AB730] mr-3 h-[100px] w-[100px]"
                                >
                                    <FontAwesomeIcon
                                        icon={f.icon}
                                        className="text-white text-[2em]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="mb-2 text-[1.25rem] font-medium leading-[1.2] text-[#212121]">
                                        {f.title}
                                    </h5>
                                    <p className="m-0 text-[#6c757d]">
                                        {f.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;