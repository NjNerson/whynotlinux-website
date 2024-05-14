import { organisateurs, partenaires } from "../utils/";
import Title from "../components/organizersPartners/Title";

//ORGANISATEURS ET PARTENAIRES
function OrganizersPartners() {
  return (
    <section className=" bg-background py-[7.5rem] px-20 font-DMMono">
      {/*ORGANISATEURS*/}
      <div className="m-auto pb-20">
        <Title>
          Organisa<span className="text-yellow">teurs</span>{" "}
        </Title>
      </div>
      {/* SEPARATORS */}
      <div className=" m-auto h-3 box-border border-dashed border-y-2 mb-24 opacity-50 text-raven "></div>
      {/*PARTENAIRES*/}
      <div className="m-auto">
        <Title>
          Nos <span className="text-yellow">Partenaires</span>{" "}
        </Title>
      </div>
    </section>
  );
}

export default OrganizersPartners;
