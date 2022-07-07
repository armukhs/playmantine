import { Dispatch, ReactElement, ReactNode } from 'react';
import { Accordion, Button, useAccordionState } from '@mantine/core';
import { styles } from './PBox.styles';
import FormControl from '../yellow/FormControl';
import { elementStyles } from '../yellow/Element.styles';

export default function PBox({
  id,
  title,
  control,
  withShadow,
  children,
  controlCb,
  round,
  contrast,
}: {
  id: string;
  title?: string;
  control?: string | ReactElement;
  withShadow?: boolean;
  children: ReactNode;
  controlCb?: Dispatch<boolean>;
  round?: boolean | undefined;
  contrast?: boolean;
}) {
  const { classes, cx } = styles({ round, contrast });
  const { classes: elm } = elementStyles();
  const [state, handlers] = useAccordionState({ total: 1, initialItem: -1 });

  function setFocus() {
    const el: HTMLInputElement | null = document.querySelector(`#${id} input[type=text]`);
    if (el) {
      const len = el.value.length;
      // el.setSelectionRange(len, len);
      el.focus();
    }
  }

  return (
    <div className={classes.wrap}>
      <div style={{ position: 'relative' }}>
        {withShadow && round && <div className={classes.shadow}></div>}
        <div id={id} className={cx(classes.root, { [classes.rectShadow]: !round && withShadow })}>
          {title && (
            // <div className={cx(classes.headerWrap, { [classes.open]: withShadow })}>
            <div className={cx(classes.headerWrap)}>
              <div className={classes.headerLabel}>
                {title} {withShadow ? 'WithShadow' : ''}
              </div>
              {control && (
                <div>
                  {!state[0] && (
                    <Button
                      compact
                      size="xs"
                      className={classes.headerControl}
                      onClick={() => {
                        setFocus();
                        handlers.toggle(0);
                        if (controlCb) controlCb(!state[0]);
                      }}
                    >
                      {control}
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
          <div className={classes.content}>{children}</div>
          {control && (
            <div className={classes.controlWrap}>
              <Accordion
                state={state}
                onChange={handlers.setState}
                classNames={{
                  control: classes.control,
                  item: classes.controlItem,
                  itemOpened: classes.controlOpened,
                  content: classes.controlContent,
                  contentInner: classes.controlContentInner,
                }}
              >
                <Accordion.Item label="PBox.Control">
                  <FormControl compactAt={480}>
                    <Button size="xs" className={elm.btnPrimary} style={{ boxShadow: 'none' }}>
                      Save
                    </Button>
                    <Button
                      size="xs"
                      className={elm.btnSecondary}
                      style={{ boxShadow: 'none' }}
                      onClick={() => {
                        if (controlCb) controlCb(!state[0]);
                        handlers.toggle(0);
                      }}
                    >
                      Cancel
                    </Button>
                  </FormControl>
                </Accordion.Item>
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
