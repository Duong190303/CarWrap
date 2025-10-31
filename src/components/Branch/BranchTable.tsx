"use client";

import { Paper, Table, Text } from "@mantine/core";

const branches = [
  {
    country: "California",
    year: "8 Years",
    website: "wrapstylecalifornia.com",
  },
  { country: "Texas", year: "7 Years", website: "wrapstyletx.com" },
  { country: "Florida", year: "5 Years", website: "wrapstylefl.com" },
  { country: "New York", year: "4 Years", website: "wrapstyleny.com" },
  { country: "Nevada", year: "3 Years", website: "wrapstylenv.com" },
  { country: "Illinois", year: "2 Years", website: "wrapstyleil.com" },
];

export const BranchTable: React.FC = () => {
  return (
    <Paper shadow="sm" radius="md" withBorder>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr bg="#389fff">
            <Table.Th>COUNTRIES</Table.Th>
            <Table.Th>YEAR</Table.Th>
            <Table.Th>WEBSITE</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {branches.map((b) => (
            <Table.Tr key={b.country}>
              <Table.Td>{b.country}</Table.Td>
              <Table.Td>{b.year}</Table.Td>
              <Table.Td>
                <Text
                  component="a"
                  href={`https://${b.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  ff={"text"}
                  fz={12}
                >
                  {b.website}
                </Text>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
};
