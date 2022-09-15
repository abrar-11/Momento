import Memory from "../models/Memory.js";

const getAllMemories = async (req, res) => {
   console.log(":hittt")
   try {
      // const memories = await Memory.find();
      const memories = {
         title: "Post 1",
         author: "Admin",
      };
      res.status(201).json({
         success: true,
         data: memories,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: error,
         data: [],
      });
   }
};

const createMemory = async (req, res, next) => {
   try {
      const memory = new Memory(req.body);
      await Memory.save();

      res.status(201).json({
         success: true,
         data: Memory,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: error,
         data: [],
      });
   }
};
export { getAllMemories, createMemory };
