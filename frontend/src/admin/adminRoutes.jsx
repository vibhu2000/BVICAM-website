import React from "react";
import AddTeam from "./team/addTeam";
import { isAuthenticated } from "./auth/helper";
import Signout from "./auth/signout";
import Dashboard from "./dashboard/dashboard";
import Signin from "./auth/signin";
import UpdateTeamMember from "./team/updateTeamMember";
import TeamMembers from "./team/teamMembers";
import AddImage from "./images/addImage";
import Images from "./images/images";
import UpdateImage from "./images/updateImage";
import Videos from "./video/videos";
import UpdateVideo from "./video/updateVideo";
import AddVideo from "./video/addVideo";
import AddStartup from "./startups/addStartup";
import Startups from "./startups/startups";
import UpdateStartup from "./startups/updateStartup";
import AddTestimonial from "./testimonials/addTestimonial";
import Testimonials from "./testimonials/testimonials";
import UpdateTestimonial from "./testimonials/updateTestimonial";
import ContactUs from "./contactUs";
import AddEvent from "./events/addEvent";
import Events from "./events/events";
import UpdateEvent from "./events/updateEvent";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../core/pageNotFound";
import ChangePassword from "./auth/changePassword";
import AddResources from "./resources/addResources";
import Resources from "./resources/resources";
import UpdateResources from "./resources/updateResources";
import AddUser from "./user/adduser";
import ManageUser from "./user/users";
import AssignTeacher from "./teachers/assignteacher";
import Teachers from "./teachers/teacher";
import UpdateDetails from "./facultyDetails/updateDetails";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

require('../style.css')

export default function AdminRoutes() {
  const queryClient = new QueryClient()
  
  const currentUser = JSON.parse(localStorage.getItem("jwt"))
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Routes>
        
      <Route path="signout" exact element={<Signout />}></Route>
      <Route path="change-password" exact element={<ChangePassword />}></Route>
      <Route path="/" exact element={<Dashboard />}></Route>
      <Route path="dashboard" exact element={<Dashboard />}></Route>
      <Route path="addFaculty" exact element={<AddTeam />}></Route>
      <Route path="facultyMembers" exact element={<TeamMembers />}></Route>
      <Route
        path="updateFacultyMember/:memberId"
        exact
        element={<UpdateTeamMember />}
      ></Route>

      {/* Update Details by faculty */}
      <Route path="updateDetails" exact element={<UpdateDetails />}></Route>

      <Route path="addResources" exact element={<AddResources />}></Route>
      <Route path="manageResources" exact element={<Resources />}></Route>
      <Route path="updateCourse/:courseId" exact element={<UpdateResources />}></Route>
      
      <Route path="addImage" exact element={<AddImage />}></Route>
      <Route path="images" exact element={<Images />}></Route>
      <Route
        path="updateImage/:imageId"
        exact
        element={<UpdateImage />}
      ></Route>
      <Route path="addVideo" exact element={<AddVideo />}></Route>
      <Route path="videos" exact element={<Videos />}></Route>
      <Route
        path="updatevideo/:videoId"
        exact
        element={<UpdateVideo />}
      ></Route>

      <Route path="addUser" exact element={<AddUser />}></Route>
      <Route path="manageUser" exact element={<ManageUser />}></Route>

      <Route path="assignTeacher" exact element={<AssignTeacher />}></Route>
      <Route path="teacher" exact element={<Teachers />}></Route>

      <Route path="addNotice" exact element={<AddStartup />}></Route>
      <Route path="notices" exact element={<Startups />}></Route>
      <Route
        path="updateNotice/:startupId"
        exact
        element={<UpdateStartup />}
      ></Route>
      <Route path="addTestimonial" exact element={<AddTestimonial />}></Route>
      <Route path="testimonials" exact element={<Testimonials />}></Route>
      <Route
        path="updateTestimonial/:testimonialId"
        exact
        element={<UpdateTestimonial />}
      ></Route>
      <Route path="contactUs" exact element={<ContactUs />}></Route>
      <Route path="addEvent" exact element={<AddEvent />}></Route>
      <Route path="events" exact element={<Events />}></Route>
      <Route
        path="updateEvent/:eventId"
        exact
        element={<UpdateEvent />}
      ></Route>
      <Route path="signin" exact element={<Signin />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
    </QueryClientProvider>
    </>
  );
}
