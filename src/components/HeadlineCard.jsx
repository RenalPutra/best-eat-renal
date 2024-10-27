import React from "react";

const HeadlineCard = () => {
  return (
    <div className="mx-w-[1640px] p-4 mx-auto py-12 grid md:grid-cols-3 gap-6">
      <div className="relative rounded-xl ">
        {/* overlay */}
        <div className="absolute bg-black/50 text-white rounded-xl w-full h-full ">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out Bogo's Out</p>
          <p className="px-2">Through 8/26</p>
          <button
            className="bg-white border-white text-black mx-2 absolute bottom-4"
            type="button"
          >
            Order now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover "
          src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt="makanan"
        />
      </div>
      <div className="relative rounded-xl ">
        {/* overlay */}
        <div className="absolute bg-black/50 text-white rounded-xl w-full h-full">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button
            className="bg-white border-white text-black mx-2 absolute bottom-4"
            type="button"
          >
            Order now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover "
          src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt="makanan"
        />
      </div>
      <div className="relative rounded-xl ">
        {/* overlay */}
        <div className="absolute bg-black/50 text-white rounded-xl w-full h-full">
          <p className="font-bold text-2xl px-2 pt-4">
            We Delivery Desserts Too
          </p>
          <p className="px-2">Taasty Treats</p>
          <button
            className="bg-white border-white text-black mx-2 absolute bottom-4"
            type="button"
          >
            Order now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover "
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt="makanan"
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
