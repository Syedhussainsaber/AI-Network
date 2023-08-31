import React from "react";
const data = [
  {
    title: "Phase 1",
    description: "10 lakh Coins at price 0.01$",
  },
  {
    title: "Phase 2",
    description: "20 Lakh Coins at price 0.02$",
  },
  {
    title: "Phase 3",
    description: "40 Lakh Coins at price 0.04$",
  },
  {
    title: "Phase 4",
    description: "80 Lakh Coins at price 0.08$",
  },
  {
    title: "Phase 5",
    description: "1Cr Coins at price 0.1$",
  },
  {
    title: "Phase 6",
    description: "2Cr Coins at price 0.2$",
  },

  {
    title: "Phase 7",
    description: "4Cr Coins at price 0.4$",
  },
  {
    title: "Phase 8",
    description: "8Cr Coins at price 0.8$",
  },
  {
    title: "Phase 9",
    description: "10Cr Coins at price 1$",
  },
  {
    title: "Phase 10",
    description: "20Cr Coins at price 1.5$",
  },
  {
    title: "",
    description: "Exchange listing at 2$ coin price",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="flex flex-col justify-start items-center bg-[#060A14] px-3 pt-20 w-full min-h-screen flex-wrap"
    >
      <h2 className="text-center text-white text-3xl uppercase pb-10 font-bold">
        Benefits
      </h2>
      <img
        src="/ai-7.jpg"
        className="rounded mb-8 hover:ring-2 ring-[#59C09D]"
        alt=""
        width={250}
        height={380}
      />
      <div>
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

function Card({ title, description }) {
  return (
    <div className="p-8 border-[1px] border-[#59c09d] rounded-lg mt-6 transform duration-300 hover:scale-105">
      <h4 className="text-[#59c09d] font-bold font-Exo text-xl">{title}</h4>
      <p className="text-white font-Inter">{description}</p>
    </div>
  );
}

export default Benefits;
