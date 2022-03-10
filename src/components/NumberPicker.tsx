import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<number[]>([]);

  const handleAddOneToCounter = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
  };

  const handleSubtractOneFromCounter = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
  };

  const handleStoreCurrentCount = () => {
    queueRerenderWithNewStoredValues([
      ...storedValuesFromCurrentRender,
      counterValueFromCurrentRender,
    ]);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your stored numbers: {storedValuesFromCurrentRender.join(", ")}</p>
      <p>Counter: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOneToCounter}>+1</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
