import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';
const HomePage = lazy(() => import("./HomePage/HomePage"));
const ContactsPage = lazy(() => import("./ContactsPage/ContactsPage"));
const RegisterPage = lazy(()=> import("./RegisterPage/RegisterPage"));
const LoginPage = lazy(()=> import("./LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<PublicRoute />}>
                 <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
        </Route>
               <Route element={<PrivateRoute />}>
                 <Route path="/contacts" element={<ContactsPage />} />
              
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>

    )
}

export default UserRoutes;