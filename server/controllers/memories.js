import Memory from "../models/Memory.js";

const getAllMemories = async (req, res) => {
   // console.log(":hittt"
   try {
      const memories = await Memory.find();
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
      // console.log(req.body);
      const memory = new Memory(req.body);
      await memory.save();

      console.log("hitt");
      res.status(201).json({
         success: true,
         data: memory,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         error: error,
         data: [],
      });
   }
};

const updateMemory = async (req, res) => {
   const id = req.params.id;

   if (!(id && mongoose.isValidObjectId(id)))
      res.status(500).json({
         success: false,
         error: "Memory Not found Invalid Id",
      });

   try {
      const data = await Memory.findById(id);

      if (!data) {
         res.status(500).json({
            success: false,
            error: "Memory Not found Invalid Id",
         });
      }

      const newMemory = await Memory.findByIdAndUpdate(id, req.body, {
         runValidators: true,
         new: true,
      });

      res.status(200).json({
         success: true,
         data: newMemory,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: "Memory Not found Invalid Id",
      });
   }
};
export { getAllMemories, createMemory, updateMemory };
