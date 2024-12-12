/* eslint-disable @typescript-eslint/no-unused-vars */
import DashboardGraph from "@/components/AdminDashboard/DashboardGraph";

const Dashboard = () => {

    return (
        <div>            
            {/* Sticky Graph Container */}
            <div className="sticky">
            <DashboardGraph />
            </div>
        </div>
    );
};

export default Dashboard;
