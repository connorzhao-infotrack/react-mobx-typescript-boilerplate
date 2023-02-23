import * as React from 'react';
import * as style from './style.css';
import { observer } from 'mobx-react';

export const ParentContainer = observer(() => {
  return <ParentComponent name={'John'} />;
});

interface IParentComponentProps {
  name: String;
}

export const ParentComponent = observer((prop: IParentComponentProps) => {
  return (
    <div className={style.normal}>
      <ChildComponent name={prop.name} />
    </div>
  );
});

interface IChildComponentProps {
  name: String;
}

export const ChildComponent = observer((prop: IChildComponentProps) => {
  return (
    <div className={style.normal}>
      <GrandchildComponent name={prop.name} />
    </div>
  );
});

interface IGrandchildComponentProps {
    name: String;
}

export const GrandchildComponent = observer((prop: IGrandchildComponentProps) => {
  return (
    <div className={style.normal}>
      <h1>My Grandfather Name: {prop.name}</h1>
    </div>
  );
});
