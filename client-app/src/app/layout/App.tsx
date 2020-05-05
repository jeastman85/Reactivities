import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";

import NavBar from "../../Features/nav/NavBar";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";

import LoadingComponent from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";
import HomePage from "../../Features/home/HomePage";
import ActivityForm from "../../Features/activities/form/ActivityForm";
import ActivityDetails from "../../Features/activities/details/ActivityDetails";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivityies();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities..." />;

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/" component={HomePage} />
        <Route path="/activities" component={ActivityDashboard} />
        <Route path="/activities/:id" component={ActivityDetails} />
        <Route path="/createActivity" component={ActivityForm} />
      </Container>
    </Fragment>
  );
};

export default observer(App);
