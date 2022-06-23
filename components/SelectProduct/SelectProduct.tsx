import { Button, Center, Paper, SimpleGrid, Text } from '@mantine/core';

export default function SelectProduct() {
  return (
    <>
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          // { maxWidth: 800, cols: 2, spacing: 'md' },
          { maxWidth: 600, cols: 1, spacing: 'md' },
        ]}
      >
        <Product label="Product 1" />
        <Product label="Product 1" />
        <Product label="Product 1" />
        <Product label="Product 1" />
        <Product label="Product 1" />
        <Product label="Product 1" />
      </SimpleGrid>
      <Center my={30}>
        <Button
          component="a"
          href="/build"
          size="md"
          variant="outline"
          color="dark"
          radius={3}
          style={{ fontWeight: 400 }}
          disabled
        >
          Next
        </Button>
      </Center>
    </>
  );
}

function Product({ label }: { label: string }) {
  return (
    <Paper p={16} pt={10} style={{ height: 140, borderColor: '#ccc' }} withBorder>
      <Text size="lg">{label}</Text>
    </Paper>
  );
}
