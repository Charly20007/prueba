import { motion } from "framer-motion";

const Notification = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="mt-4 bg-green-500 text-white p-3 rounded shadow-lg fixed top-5 right-5"
    >
      {message}
    </motion.div>
  );
};

export default Notification;
