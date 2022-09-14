const getAllMemories = (req, res) => {
   res.status(201).json({
      success: true,
      data: [],
   });
};

export { getAllMemories };
