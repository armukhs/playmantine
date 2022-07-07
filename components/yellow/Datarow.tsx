import { createStyles, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/use-form';
import { MutableRefObject } from 'react';
import Row from './Row';

const styles = createStyles((theme) => ({
  root: {
    borderLeft: `1px solid ${theme.colors.dark[1]}`,
  },

  input: {
    borderRadius: 0,
    borderColor: theme.colors.gray[4],
    ':focus': {
      borderColor: theme.colors.gray[7],
      boxShadow: `2px 2px 0 ${theme.colors.gray[3]}`,
    },
    ':read-only': {
      backgroundColor: theme.colors.gray[1],
      borderColor: theme.colors.gray[1],
      ':focus': {
        // borderColor: theme.colors.gray[4],
        boxShadow: `none`,
      },
    },
  },
}));

export default function Datarow({
  label,
  readOnly,
  compactAt,
  bind,
  autoFocus,
}: {
  label: string;
  readOnly: boolean;
  compactAt?: number;
  bind: [form: UseFormReturnType<any>, field: string];
  autoFocus?: boolean;
}) {
  const { classes } = styles();
  // const ref = useRef<HTMLInputElement>();
  const form = bind[0];
  const field = bind[1];

  return (
    <Row label={label} compactAt={compactAt}>
      <TextInput
        {...form.getInputProps(field)}
        readOnly={readOnly}
        autoFocus={autoFocus}
        classNames={{
          input: classes.input,
        }}
      />
    </Row>
  );
}
