import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
import Flipex from "./Flipex";
import Footer from "./Footer";
import Flip from "./Flip";

ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);



const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Crops-Arrivals (in MT)",
    },
  },
};

const data = {
  labels:["Jan", "Feb", "Mar", "Apr", "May"],
  
  datasets: [
    {
      label: "Bajra",
     data:[9570,13576,8760,8110,7770],
      backgroundColor: "#48b5c4",
    },
    {
      label:'Maize',
      data:[24049,9456,14500,56320,66000],
      backgroundColor:'#76c68f'
    },
    {
      label:'Wheat',
      data:[56357,40000,44400,56452,43330],
     
      backgroundColor:'#a6d75b'
    },
    {
      label:'Jowar',
      data:[52000,45123,65214,66660,54620],
      backgroundColor:'#c9e52f'
    },

  ],

};

 function Graph() {
  return (
    <div className="App">
  
    <br/>
     <p>Bar Graph</p>
      <Bar options={option} data={data} />
      <Footer/>
    </div>
  );
}
export default Graph