/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";

const HeadLink = ({tag, tag1}: any) => {
    return (
        <div className="bg-gray-50 p-2 px-10 text-start">
        <p className="flex items-center gap-3">
            <Link to="/" className="text-violet-500 hover:underline">
                {tag}
            </Link>
            <GrNext className="text-[12px]" />
            <Link to="/login" className="text-violet-500 hover:underline">
                {tag1}
            </Link>
        </p>
    </div>
    );
};

export default HeadLink;