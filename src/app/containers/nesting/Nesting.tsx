import { observer } from 'mobx-react';
import * as React from 'react';

export const Nesting = observer(() => {
  return (
    <>
      <DivComponent />
      <FragmentComponent />
    </>
  );
});

export const DivComponent = observer(() => {
  return (
    <div>
      <h1>Div</h1>
      <h1>line 1</h1>
      <h1>line 2</h1>
    </div>
  );
});

export const FragmentComponent = observer(() => {
  return (
    <>
      <h1>Fragment</h1>
      <h1>line 1</h1>
      <h1>line 2</h1>
    </>
  );
});
