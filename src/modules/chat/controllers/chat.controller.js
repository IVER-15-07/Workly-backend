import { ChatService } from "../services/chat.service.js";

export const ChatController = {
  async createOrGetConversation(req, res) {
    try {
      const { userAId, userBId, titulo } = req.body;
      if (!userAId || !userBId) return res.status(400).json({ error: "Falta userAId o userBId" });
      const conv = await ChatService.getOrCreateConversationBetween(userAId, userBId, titulo);
      res.status(200).json(conv);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getMessages(req, res) {
    try {
      const { id } = req.params;
      const messages = await ChatService.getMessages(Number(id));
      res.json(messages);
    } catch (err) {

      res.status(500).json({ error: err.message });
    }
  }


};