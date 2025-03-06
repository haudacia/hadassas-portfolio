import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Homepage />} />
            <Route path='/project-surflowforms' element={<SurflowForms />} />
            <Route path='/project-revitaddins' element={<RevitAddins />} />
            <Route path='/about-me' element={<AboutMe />} />
        </Route>
    )
)

const App = () => {
    return <RouterProvider router={router} />
}

export default App;