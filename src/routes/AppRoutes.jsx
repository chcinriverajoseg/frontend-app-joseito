/*import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

import ExplorePage from "@/pages/ExplorePage";
import MatchesPage from "@/pages/MatchesPage";
import ProfilePage from "@/pages/ProfilePage";
import ChatPage from "@/pages/ChatPage";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* rutas protegidas *//*}
      <Route
        path="/explore"
        element={
          <ProtectedRoute>
            <ExplorePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/matches"
        element={
          <ProtectedRoute>
            <MatchesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chats"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
*/
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import ExplorePage from "@/pages/ExplorePage";
import MatchesPage from "@/pages/MatchesPage";
import ProfilePage from "@/pages/ProfilePage";
import ChatPage from "@/pages/ChatPage";
import ChatRoom from "@/pages/ChatRoom";


export default function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/explore" element={<ExplorePage />} />
<Route path="/matches" element={<MatchesPage />} />
<Route path="/profile" element={<ProfilePage />} />
<Route path="/chat" element={<ChatPage />} />
<Route path="/chat/:id" element={<ChatRoom />} />
</Routes>
);
}