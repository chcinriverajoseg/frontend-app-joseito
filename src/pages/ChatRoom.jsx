
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/api/axios";
import Button from "@/ui/Button";
import Input from "@/ui/Input";

export default function ChatRoom() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const loadMessages = async () => {
    try {
      const res = await api.get(`/messages/${id}`);
      setMessages(res.data);
    } catch (err) {
      console.error("Error cargando mensajes", err);
    }
  };

  const sendMessage = async () => {
    try {
      await api.post(`/messages/${id}`, { text });
      setText("");
      loadMessages();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6 p-4">
      <h1 className="text-xl font-bold text-center mb-4">Chat</h1>

      <div className="bg-white p-4 rounded-lg shadow h-96 overflow-y-auto">
        {messages.map((m, idx) => (
          <p key={idx} className="mb-3">
            <strong>{m.senderName}:</strong> {m.text}
          </p>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <Input
          className="flex-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <Button onClick={sendMessage}>Enviar</Button>
      </div>
    </div>
  );
}
