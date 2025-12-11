/*import { useEffect, useState } from "react";
import api from "@/api/axios";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/UserContext";

export default function MatchesPage() {
  const { token } = useUserContext();
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/users/matches", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMatches(res.data);
      } catch {
        setMatches([]);
      }
    };

    load();
  }, [token]);

  const goToChat = (id) => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Tus matches 💘</h1>

      {matches.length === 0 && <p className="text-center">No tienes matches aún</p>}

      <div className="space-y-4">
        {matches.map((user) => (
          <div
            key={user._id}
            className="p-4 bg-white dark:bg-gray-900 shadow rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>

            <button
              onClick={() => goToChat(user._id)}
              className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-600 transition"
            >
              💬 Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}*/

import api from "@/api/axios";
import { useEffect, useState } from "react";
import Card from "@/ui/Card";
import { Link } from "react-router-dom";


export default function MatchesPage() {
const [matches, setMatches] = useState([]);


useEffect(() => {
api.get("/matches").then((res) => setMatches(res.data));
}, []);


return (
<div className="max-w-md mx-auto mt-8 p-4">
<h1 className="text-xl font-bold mb-4 text-center">Tus Matches</h1>


{matches.length === 0 && <p className="text-gray-500 text-center">Todavía no tienes matches 😢</p>}


{matches.map((match) => (
<Link key={match._id} to={`/chat/${match._id}`}>
<Card className="mb-3 cursor-pointer">
<h2 className="font-semibold">{match.name}</h2>
<p className="text-gray-600">Haz clic para chatear</p>
</Card>
</Link>
))}
</div>
);
}
