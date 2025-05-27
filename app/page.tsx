import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="132"
          name="neura the brainy explorer"
          topic="neural network"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="123"
          name="Countsy the number wizard"
          topic="Derivatives and Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="1234"
          name="verba the vocabulary builder"
          topic="language"
          subject="english literature"
          duration={30}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
