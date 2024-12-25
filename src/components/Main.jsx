import Entry from "./Entry";
import data from "../data";

const Main = () => {
  return (
   <main>
     {data.map( entry => <Entry 
      key={entry.id} 
      {...entry}
    />)
     }
   </main>
  )
}

export default Main;