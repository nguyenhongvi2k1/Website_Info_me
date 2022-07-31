import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Detail_project from "./pages/Detail_project";
import Hobbies from "./pages/Hobbies";
import Contact_me from "./pages/Contact_me";
import Admin_project from "./components/Admin/Admin_project";
import Form_Hobbies from "./components/Admin/Form_Hobbies";
import Form_Project from "./components/Admin/Form_Project";
import Help from "./components/Admin/Help";
import Package from "./components/Package";

function App() {
  return (
    <>
      <Router>
        {/* Admin */}
        <Route path="/admin_project" component={Admin_project} />
        <Route path="/form_hobbies" component={Form_Hobbies} />
        <Route path="/form_project" component={Form_Project} />
        <Route path="/admin_help" component={Help} />


        {/* Pages */}
        <Route exact path="/" component={Home} />
        <Route path="/detail_project" component={Detail_project} />
        <Route path="/project" component={Project} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/contact_me" component={Contact_me} />

      {/* Component */}
      <Route path="/pack" component={Package} />

      </Router>
    </>
  );
}

export default App;
