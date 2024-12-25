import Entry from "./Entry";
import data from "../data";

const Main = () => {
  return (
   <main>
     {data.map( entry => <Entry 
      key={entry.id} 
      img={entry.img} 
      title={entry.title}
      country={entry.country} 
      googgleMapLink={entry.googgleMapLink} 
      dates={entry.dates} text={entry.text} 
    />)
     }
   </main>
  )
}

export default Main;