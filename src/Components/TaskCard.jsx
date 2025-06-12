import { Card, CardHeader, CardBody, Heading, Text, Badge } from "@chakra-ui/react";

const statusColor = {
  Pending: "yellow",
  "In Progress": "blue",
  Completed: "green",
};

export default function TaskCard({ task }) {
  return (
    <Card className="mb-4 shadow-md">
      <CardHeader className="flex justify-between items-center">
        <Heading size="md">{task.title}</Heading>
        <Badge colorScheme={statusColor[task.status]}>{task.status}</Badge>
      </CardHeader>
      <CardBody>
        <Text className="text-gray-600">{task.description}</Text>
        <Text className="text-sm text-gray-400 mt-2">Created on: {task.createdAt}</Text>
      </CardBody>
    </Card>
  );
}
