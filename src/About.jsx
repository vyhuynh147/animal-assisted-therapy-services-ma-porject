import Akcimg from "./akc.png";

export function About() {
  return (
    <div className="About">
      <h1>About Animal Assisted Therapy Services MA</h1>
      <ImgIntro/>
      <Intro/>
      <Mission/>
      <Teams/>
      
    </div>
  );
}

function ImgIntro () {
  return (
    <div className="imgIntro">
      <img src = {Akcimg} alt = "AKC image" className="img-intro" />

    </div>
  );
}

function Intro () {
  return (
    <div className="Intro">
      <h2> AATS MA is an AKC Approved Therapy Dog Organization</h2>
      <p> Animal Assisted Therapy Services MA is a 501c3 nonprofit organization dedicated to providing professional
         and compassionate therapy dog visits throughout Massachusetts.
         We also offer quality and informed dog training services to the local community. </p>
    </div>
  );
}

function Mission () {
  return (
    <div className="Mission">
      <h2> Our Mission </h2>
      <p> To provide professional and compassionate therapy dog visits to facilities throughout Massachusetts while ofering quality
        and informed dog training services to our local community.
      </p>
    </div>
  );
}

function Teams () {
  return (
    <div className="Teams">
      <h2> Meet Our Teams </h2>
      <h3> AATS MA has over 70 active therapy dog teams and 3 therapy cats.</h3>
    </div>
  );
}



