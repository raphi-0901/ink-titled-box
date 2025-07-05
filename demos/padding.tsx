import type React from "react";
import { TitledBox } from "../main";
import { Box, Text, type BoxProps } from "ink";

type Padding = Pick<BoxProps, 'paddingX' | 'paddingY'>;

const padding: Array<Padding> = [
  { paddingX: 1, paddingY: 1 },
  { paddingX: 1, paddingY: 0 },
  { paddingX: 0, paddingY: 1 }
];

export const Padding: React.FC = () => (
  <Box flexDirection="column" gap={1}>
    {
      padding.map((padding, i) => (
        <TitledBox borderStyle="single" titles={["text"]} {...padding}>
          <Text>
            {
              Object
                .entries(padding)
                .map(([key, value]) => `${key} = ${value}`)
                .join(', ')
            }
          </Text>
        </TitledBox>
      ))
    }
  </Box>
);

