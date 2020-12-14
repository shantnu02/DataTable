import React, { Suspense, useEffect } from "react";
import "components/FontawsomeIcons";

import "./App.css";
import "./dark.css";

import Layout from "pages/_layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "routes";
import PageNotFound from "pages/PageNotFound";
import Home from "pages/Home";
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
                        <Route path="/Details/:id">
                            <Details />
                        </Route>
                        <Route>
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Suspense>
            {/* </Layout> */}
        </Router>
    );
}

export default App;
