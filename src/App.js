import Header from "./components/Header";
import ResultHeader from "./components/ResultHeader";
import SalaryWorkDay from "./components/SalaryWorkDay";
import CardVolume from "./components/Card/CardVolume";
import CardTopx from "./components/Card/CardTopx";
import CardStrength from "./components/Card/CardStrength";
import CardCoverage from "./components/Card/CardCoverage";

function App() {
  return (
      <div className="container">

          <div className="row text-center m-3">
            <Header />
          </div>
          <div className="row text-center m-3">
            <ResultHeader />
          </div>
          <div className="row text-center m-3">
            <SalaryWorkDay />
          </div>
          <div className="card-group">

            <CardVolume />
            <CardTopx />

            <CardStrength />
            <CardCoverage />


          </div>
      </div>)
}

export default App;
