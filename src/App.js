import React, { Suspense, useEffect } from "react";
import "components/FontawsomeIcons";

import "./App.css";
import "./dark.css";


import { BrowserRouter as Router, Switch, Route,useRouteMatch } from "react-router-dom";
import routes from "routes";
import DataTable from "pages/DataTable";
import Details from "pages/DataTable/Details";

function App() {
    return (
        <Router>
            {/* <Layout> */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}

                        <Route path="/" exact>
                            <DataTable />
                        </Route>
                        <Route path="/Details/:id" render={({match})=> <Details userId={match.params.id} />}>
                           
                        </Route>
                        
                    </Switch>
                </Suspense>
            {/* </Layout> */}
        </Router>
    );
}

export default App;
