import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import ArticlePage from "./pages/articlePage/ArticlePage";
import BasketPage from "./pages/basketPage/BasketPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Page404 from "./pages/page404/Page404";
import ProtectedRoute from "./containers/protectedRoute/ProtectedRoute";

function App() {
    const isAuth = false;
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path={"/login"}
                element={
                    <ProtectedRoute isAllowed={!isAuth} redirectPath={"/"}>
                        <LoginPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path={"/registration"}
                element={
                    <ProtectedRoute isAllowed={!isAuth} redirectPath={"/"}>
                        <RegistrationPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route
                path={"/profile/:id"}
                element={
                    <ProtectedRoute
                        isAllowed={isAuth !== null && isAuth}
                        redirectPath={"/login"}
                    >
                        <ProfilePage />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}

export default App;
