import { Button } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import GpaShow from "../components/GpaShow";
import NewSemester from "../components/NewSemester";
import PageLayout from "../components/PageLayout";
import Semester from "../components/Semester";
import { getSemester } from "../hooks/handleStorage";

export default function Calculate() {
  type CourseItem = {
    CourseTitle: string,
    Grade: string,
    Credit: number
  }
  const [semesters, setSemesters] = useState<any[] | null>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onCancel = () => {
    setIsModalOpen(false);
  }
  const handleClearStorage = () => {
    localStorage.clear();
    setSemesters([]);
  }

  useEffect(() => {
    setSemesters(getSemester())
    console.log(semesters);
  }, [])

  return (<PageLayout>
    <Link href={"/"}><h1 style={{ textAlign: 'center' }}>CGPA calculator</h1></Link>
    {/* <Semester /> */}
    <GpaShow semesters={semesters} pos={'right'} />
    {semesters?.map((sem, index) => (<Semester semesters={semesters} setSemesters={setSemesters} data={sem} index={index} key={index} />))}
    <NewSemester isModalOpen={isModalOpen} onCancel={onCancel} setSemesters={setSemesters} semesters={semesters} />
    <Button type="primary" onClick={() => showModal()}>Add new semester</Button> <br />
    <div>
      <Button type="primary" style={{ margin: '1rem 5px', backgroundColor: 'blueviolet' }} onClick={() => setSemesters(getSemester())}>Calculate</Button>
      <Button type="primary" danger style={{ margin: '1rem 5px' }} onClick={handleClearStorage}>Clear all</Button>
    </div>
    <GpaShow semesters={semesters} pos={'left'} />
  </PageLayout>);
}