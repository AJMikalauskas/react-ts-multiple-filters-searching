import Image from "next/image";
import patients from "./patients.json"
import { Patient, Table } from "./components/Table";

export default function Home() {

  return (
    <>
      <div style={{ padding: '40px' }}>
        <Table patients={patients} />
      </div>
    </>
  );
}
