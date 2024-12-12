/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";

const HeadLink = ({ tag, tag1 }: any) => {
    return (
        <div className="bg-gray-50 flex p-2 px-10 text-start gap-3">
            <p className="items-center gap-3 flex">
                <Link to="/" className="text-violet-500 hover:underline">
                    {tag}
                </Link>
                <GrNext className="text-[12px]" />
            </p>
            <p>
                <Link to={`/${tag1}`} className="text-violet-500 hover:underline">
                    {tag1}
                </Link></p>
        </div>
    );
};

export default HeadLink;