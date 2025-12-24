// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FormList from "./pages/FormList";
// import DynamicForm from "./pages/DynamicForm";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// // import AdminDashboard from "./pages/admin/AdminDashboard";
// import CreateForm from "./pages/admin/CreateForm";
// import AdminDashboard from "./pages/AdminDashboard";
// import Forms from "./pages/admin/Forms";
// import AdminFormResponses from "./pages/admin/AdminFormResponses";
// import AdminResponseDetails from "./pages/admin/AdminResponseDetails";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//     <Navbar />
//       <Routes>
        
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
        
//         <Route path="/forms" element={<FormList />} />
//         <Route path="/form/:id" element={<DynamicForm />} />
        
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/admin/create-form" element={<CreateForm />} />
//         <Route path="/admin/forms" element={<Forms />} />
//         <Route path="/admin/forms/:formId/responses" element={<AdminFormResponses />} />
//         <Route path="/admin/responses/:responseId" element={<AdminResponseDetails />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User */}
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

        {/* Admin */}
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
