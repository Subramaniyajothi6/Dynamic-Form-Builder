
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import FormList from "./pages/FormList";
// import DynamicForm from "./pages/DynamicForm";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import AdminDashboard from "./pages/AdminDashboard";
// import CreateForm from "./pages/admin/CreateForm";
// import Forms from "./pages/admin/Forms";
// import AdminFormResponses from "./pages/admin/AdminFormResponses";
// import AdminResponseDetails from "./pages/admin/AdminResponseDetails";

// import Navbar from "./components/Navbar";
// import AdminRoute from "./routes/AdminRoute";
// import UserRoute from "./routes/UserRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route
//           path="/forms"
//           element={
//             <UserRoute>
//               <FormList />
//             </UserRoute>
//           }
//         />

//         <Route
//           path="/form/:id"
//           element={
//             <UserRoute>
//               <DynamicForm />
//             </UserRoute>
//           }
//         />


//         <Route
//           path="/admin"
//           element={
//             <AdminRoute>
//               <AdminDashboard />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/create-form"
//           element={
//             <AdminRoute>
//               <CreateForm />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/forms"
//           element={
//             <AdminRoute>
//               <Forms />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/forms/:formId/responses"
//           element={
//             <AdminRoute>
//               <AdminFormResponses />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/responses/:responseId"
//           element={
//             <AdminRoute>
//               <AdminResponseDetails />
//             </AdminRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FormList from "./pages/FormList";
import DynamicForm from "./pages/DynamicForm";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/AdminDashboard";
import CreateForm from "./pages/admin/CreateForm";
import Forms from "./pages/admin/Forms";
import AdminFormResponses from "./pages/admin/AdminFormResponses";
import AdminResponseDetails from "./pages/admin/AdminResponseDetails";

import Navbar from "./components/Navbar";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import UserHome from "./pages/UserHome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home instructions */}
        <Route path="/" element={<UserHome />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/forms"
          element={
            <UserRoute>
              <FormList />
            </UserRoute>
          }
        />
        <Route
          path="/form/:id"
          element={
            <UserRoute>
              <DynamicForm />
            </UserRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/create-form"
          element={
            <AdminRoute>
              <CreateForm />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/forms"
          element={
            <AdminRoute>
              <Forms />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/forms/:formId/responses"
          element={
            <AdminRoute>
              <AdminFormResponses />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/responses/:responseId"
          element={
            <AdminRoute>
              <AdminResponseDetails />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
