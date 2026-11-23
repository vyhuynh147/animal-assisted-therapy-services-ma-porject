import dogImg from "./dog.png";
 
 export function Home () {
    return (
        <div>
            <Header/>
            <MainImg/>
            <Topic/>
            <News/>
        </div>
    );
}


function Header() {
  return (
    <div className= "Header"> 

      <title> Animal Assisted Therapy Services MA </title>
      <h1> Animal Assisted Therapy Services <abbr> MA</abbr> </h1>
      <h2> 501c3 Nonprofit organization proudly serving Massachusetts </h2>
    </div>
  );
}

function MainImg () {
  return (
    <div className="Img">
      <img src = {dogImg} alt = "Main Img" className="main-img"/>
    </div>
  );
}


function Topic () {
    return (
        <div className= "Topic">
            <h2> Connecting People Through Animals </h2>
            <p> At AATS MA, we believe that animals have a special way of bringing people comfort and happiness.
              Through animal assisted therapy
                we connect people with trained therapy animals to create meaningful experiences, build connections,
                 and bring a little more joy to everyday life.</p>
        </div>
    );
}

function News () {
  return (
    <div className="News">
       
    </div>
  );
}





