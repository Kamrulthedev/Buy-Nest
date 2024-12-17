import Heading from "@/Heading/Heading";
import Line from "@/components/CetegoryProducts/Line";
import HeadLink from "@/components/ui/HeadLink";

const Cards = () => {

  return (
    <div>
      <div className="px-6">
        <HeadLink tag="Home" tag1="cards"></HeadLink>
      </div>
      <div className="w-5/6 mx-auto my-5 min-h-screen">
        <div>
          <Heading Heading="Shopping Cart" />
        </div>
        <div className="md:grid grid-cols-6 gap-4  animate__animated animate__fadeInDown">
          <div className="overflow-x-auto col-span-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="w-full">
              
              </tbody>
            </table>
          </div>

          <div className="col-span-2 border my-5 p-5 animate__animated animate__fadeInDown">
            <div className="space-y-5">
           
              <div>
            
              </div>
            </div>
          </div>
        </div>
        <div>
          <Line></Line>
        </div>
      </div>

    </div>
  );
};

export default Cards;
