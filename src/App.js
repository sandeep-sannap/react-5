import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Useredit from "./useredit";
import UserList from "./userlist";
import Usercreate from "./usercreate";
import { UserProvider } from "./userContext";
import { ProductProvider } from "./productContext";
import Productedit from "./productEdit";
import Productlist from "./pruductList";
import Productcreate from "./productCreate";

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <UserProvider>
            <ProductProvider>
              <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                  <Topbar></Topbar>
                  <div class="container-fluid">
                    <Switch>
                      <Route path="/dashboard" component={Dashboard} />
                      <Route path="/userlist" component={UserList} />
                      <Route path="/useredit/:id" component={Useredit} />
                      <Route path="/usercreate" component={Usercreate} />
                      <Route path="/productlist" component={Productlist} />
                      <Route path="/productcreate" component={Productcreate} />
                      <Route path="/productedit/:id" component={Productedit} />
                    </Switch>
                  </div>
                </div>
              </div>
            </ProductProvider>
          </UserProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
