'use client'
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Checkbox from "./components/Checkbox/Checkbox";

export default function Home() {
  return (
    <div className="fill-x fill-y al-5 al-ver gap-8">
      <Button/>
      <Input/>
      <Checkbox/>
    </div>
  );
}
