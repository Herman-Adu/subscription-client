import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context"

export const ProtectedRoute = () => {
    // pull in the state
    const [state] = useContext(UserContext)

    // if it loading return a spinner
    if (state.loading) return <div>Spinner...</div>

    // otherwise if we have data return outlet, if no data,
    // return the navigate component that navigates you to home
    return state.data ? <Outlet /> : <Navigate to="/" />
}