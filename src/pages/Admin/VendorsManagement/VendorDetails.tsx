
import { useParams } from "react-router-dom";

const VendorDetails = () => {
    // Retrieve the 'id' parameter from the URL
    const { id } = useParams<{ id: string }>();

    // Log the 'id' to the console
    console.log("Vendor ID:", id);

    return (
        <div>
            <h1>Vendor Details for ID: {id}</h1>
            {/* You can use 'id' to fetch and display vendor details */}
        </div>
    );
};

export default VendorDetails;
