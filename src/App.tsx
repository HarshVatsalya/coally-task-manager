import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import TaskList from './Components/TaskList'; // ✅ Import TaskList

function App() {
  return (
    <ChakraProvider>
      <main className="bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center py-6">Coally Task Manager</h1>
        <TaskList />
      </main>
    </ChakraProvider>
  );
}

export default App;
