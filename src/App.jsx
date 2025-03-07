import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import SurflowForms from "./pages/SurflowForms";
import RevitAddins from "./pages/RevitAddins";
import WorkoutTracker from "./pages/WorkoutTracker";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

const App = () => (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path='projects'>
                <Route index element={<Projects />} />
                <Route path='surflow-forms' element={<SurflowForms />} />
                <Route path='revit-addins' element={<RevitAddins />} />
                <Route path='workout-tracker' element={<WorkoutTracker />} />
            </Route>
        </Route >
    </Routes>
)

// const App = () => {
//     return <RouterProvider router={router} />
// }

export default App;