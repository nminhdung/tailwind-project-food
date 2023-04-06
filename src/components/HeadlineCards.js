import React from "react";

const HeadlineCards = () => {
  return (
    <section className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/*Card */}
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-none bg-orange-500 text-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] object-cover w-full rounded-xl"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurant</p>
          <p className="px-2">Added daily</p>
          <button className="border-none bg-orange-500 text-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] object-cover w-full rounded-xl"
          src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-none bg-orange-500 text-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] object-cover w-full rounded-xl"
          src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </section>
  );
};

export default HeadlineCards;
