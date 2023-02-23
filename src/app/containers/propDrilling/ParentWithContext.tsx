import { createContext } from 'react';
import { observer } from 'mobx-react';
import * as style from './style.css';
import * as React from 'react';
import { makeAutoObservable } from 'mobx';

class Parent {
  name: string;
  height: number;
  constructor(name: string, height: number) {
    this.name = name;
    this.height = height;
    makeAutoObservable(this)
  }
}

const parentValue = new Parent('John', 5.6);
const ParentContext = createContext<Parent>(parentValue);

export const ParentWithContext = observer(() => {
  return (
    <ParentContext.Provider value={parentValue}>
      <ParentComponent />
    </ParentContext.Provider>
  );
});

export const ParentComponent = observer(() => {
  <h1>Parent</h1>;
  return <ChildComponent />;
});

export const ChildComponent = observer(() => {
  return (
    <div className={style.normal}>
      <GrandchildComponent />
    </div>
  );
});

export const GrandchildComponent = observer(() => {
  const parent = React.useContext(ParentContext);
  return (
    <div className={style.normal}>
      <h1>My Grandfather Name: {parent.name}</h1>
      {/* <h1>My Grandfather Height: {parent.height}</h1> */}
    </div>
  );
});
