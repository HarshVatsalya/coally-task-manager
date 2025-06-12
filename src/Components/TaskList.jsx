import React, { useState } from "react";
import { Input, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, Text } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import { tasks as initialTasks } from "../data/tasks";

export default function TaskList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editedStatus, setEditedStatus] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newTitle, setNewTitle] = useState("");
const [newDesc, setNewDesc] = useState("");
const [newStatus, setNewStatus] = useState("");

  const openModal = (task) => {
    setSelectedTask(task);
    setEditedStatus(task.status);
    onOpen();
  };

  const handleSaveChanges = () => {
    const updated = tasks.map((t) =>
      t.id === selectedTask.id ? { ...t, status: editedStatus } : t
    );
    setTasks(updated);
    onClose();
  };
  const handleAddTask = () => {
  if (!newTitle.trim()) return; 

  const newTask = {
    id: tasks.length + 1,
    title: newTitle,
    description: newDesc,
    status: newStatus || "Pending",
    createdAt: new Date().toISOString().split("T")[0], 
  };

  setTasks([newTask, ...tasks]);
  setNewTitle("");
  setNewDesc("");
  setNewStatus("");
  onAddClose();
};
const {
  isOpen: isAddOpen,
  onOpen: onAddOpen,
  onClose: onAddClose,
} = useDisclosure();


  const filteredTasks = tasks.filter((task) => {
    const matchesTitle = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter ? task.status === statusFilter : true;
    return matchesTitle && matchesStatus;
  });

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Filter controls */}
      <div className="flex justify-end mb-4">
  <Button colorScheme="green" onClick={onAddOpen}>
    + New Task
  </Button>
</div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input 
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sm:w-1/2"
        />
        <Select
          placeholder="Filter by status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="sm:w-1/2"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Select>
      </div>

      {/* Task cards */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <div key={task.id} onClick={() => openModal(task)} className="cursor-pointer">
            <TaskCard task={task} />
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-10">No tasks found.</p>
      )}

      {/* Detail Modal */}
      <Modal isOpen={isAddOpen} onClose={onAddClose} isCentered>
  <ModalOverlay />
  <ModalContent className="w-full mx-4 sm:mx-0">
    <ModalHeader>Add New Task</ModalHeader>
    <ModalCloseButton />
    <ModalBody className="space-y-4">
      <Input className="w-full"
        placeholder="Title (required)"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <Input className="w-full"
        placeholder="Description (optional)"
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <Select className="w-full"
        placeholder="Select status"
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </Select>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={handleAddTask}>
        Add Task
      </Button>
      <Button variant="ghost" onClick={onAddClose}>
        Cancel
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
       <ModalContent className="w-full mx-4 sm:mx-0">
          <ModalHeader>Task Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4">
            <Text fontWeight="bold">Title:</Text>
            <Text>{selectedTask?.title}</Text>

            <Text fontWeight="bold">Description:</Text>
            <Text>{selectedTask?.description}</Text>

            <Text fontWeight="bold">Status:</Text>
            <Select className="w-full" value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveChanges}>
              Save Changes
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
