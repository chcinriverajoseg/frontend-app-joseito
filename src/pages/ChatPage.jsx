/*import { useEffect, useState } from "react";
import api from "@/api/axios";
import { useUserContext } from "@/context/UserContext";
import ChatRoom from "./ChatRoom";

export default function ChatPage() {
  const { user } = useUserContext();
  const [matches, setMatches] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await api.get(`/users/matches/${user._id}`);
        setMatches(res.data.matches || []);
      } catch (err) {
        console.log("Error cargando matches", err);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Sidebar *//*}
      <div className="bg-white p-4 rounded-xl shadow h-full overflow-y-auto">
        <h2 className="font-bold mb-4">Matches</h2>

        {matches.length === 0 && <p>No tienes matches aún.</p>}

        {matches.map((m) => (
          <button
            key={m._id}
            className="block w-full text-left p-2 rounded-lg hover:bg-gray-200"
            onClick={() => setSelectedChat(m._id)}
          >
            ❤️ {m.name}
          </button>
        ))}
      </div>

      {/* Chat right side (2 columns span) *//*}
      <div className="col-span-2 bg-gray-50 p-4 rounded-xl shadow h-full">
        {!selectedChat ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Selecciona un match para chatear
          </div>
        ) : (
          <ChatRoom roomId={selectedChat} />
        )}
      </div>
    </div>
  );
}*/

import { useEffect, useState } from "react";
import api from "@/api/axios";
import Card from "@/ui/Card";
import { Link } from "react-router-dom";

export default function ChatPage() {
  const [matches, setMatches] = useState([]);

  const loadMatches = async () => {
    try {
      const res = await api.get("/matches");
      setMatches(res.data);
    } catch (err) {
      console.error("Error cargando matches", err);
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 mt-6">
      <h1 className="text-xl font-bold mb-4 text-center">Tus Chats</h1>

      {matches.length === 0 ? (
        <p className="text-gray-500 text-center">Aún no tienes matches 💔</p>
      ) : (
        matches.map((match) => (
          <Link key={match._id} to={`/chat/${match._id}`}>
            <Card className="p-4 mb-3 hover:bg-gray-100 cursor-pointer transition rounded-xl shadow">
              <h2 className="font-semibold">{match.name}</h2>
              <p className="text-gray-600 text-sm">Haz clic para chatear</p>
            </Card>
          </Link>
        ))
      )}
    </div>
  );
}

