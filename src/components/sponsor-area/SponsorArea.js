import "./sponsor-area.css";

function SponsorArea({ sponsorImg }) {
  return (
    <section className="sponsor-area">
      <img src={sponsorImg} alt="sponsor-img" />
    </section>
  );
}

export default SponsorArea;
